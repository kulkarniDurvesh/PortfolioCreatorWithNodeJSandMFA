import React, { useEffect, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom';
import "../../css/Details.css"
import axios from 'axios'
import swal from 'sweetalert';
import $ from 'jquery'

const Details = () => {
    const navigate = useNavigate();
    const[file,setFile] =useState(JSON.parse(sessionStorage.getItem('uploadedImages')) || {});
    const username = sessionStorage.getItem('UserName');
    const [image, setImage] = useState(null);
    const [fileName,setFileName] = useState("");
    const [countofImages,setCountOfImages]=useState(Object.keys(file).length);
    const [form,setForm] = useState({
        linkedin:"",
        github:"",
        twitter:"",
        instagram:"",
        youtube:""
    });

    useEffect(()=>{
        if(username === undefined || username === ''||username===null){
            navigate('/Login');
        }
    },[])

    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/')
    }

    const handleuploadfile=(event,name)=>{
        debugger;
        const newFile = event.target.files[0];
        if (newFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setImage(reader.result);
              setFileName(event.target.name);
              setFile(prevState => ({
                ...prevState,
                [name]: {
                    file: newFile,
                    image: reader.result
                }
            }));

            sessionStorage.setItem('uploadedImages', JSON.stringify({
                ...file,
                [name]: {
                    file: newFile,
                    image: reader.result
                }
            }));

            };
            reader.readAsDataURL(newFile);
          }
        //setFile(event.target.files[0]);
    }

    const handleUpload = (imageName) => {
        debugger;
        // const imageName = event.target.name;
        const formData = new FormData();
        if(imageName === 'ProfileImage'){
            formData.append('file', file.ProfileImage.file);
        }
        if(imageName === 'Aboutme1'){
            formData.append('file', file.Aboutme1.file);
        }
        if(imageName === 'Aboutme2'){
            formData.append('file', file.Aboutme2.file);
        }
        if(imageName === 'ProjectImage'){
            formData.append('file', file.ProjectImage.file);
        }
        //formData.append('imageName', imageName);
        axios.post(`http://localhost:5000/upload?imageName=${imageName}`, formData)
          .then(response => {
            setCountOfImages(countofImages+1)
            swal("Image saved Successfully!!")
          })
          .catch(error => {
            console.error('Error uploading file:', error);
        });
    };

    const addSocialMedia=(event)=>{
        let name = event.target.name;
        setForm({...form,[name]:event.target.value})
    }

    const saveMediaChanges=()=>{
        const formString = JSON.stringify(form);
        sessionStorage.setItem('SocialMediaAccounts',formString);
        if(countofImages===4){
            $('#exampleModalCenter').hide();
            $('body').removeClass('modal-open');
            $('.modal-backdrop').removeClass('modal-backdrop');
            swal("Thanks for Uploading all images");
            navigate('/QuestionPage');
        }
        else{
            swal("Please upload all images");
        }
    }

    const openQuestionPage=()=>{
        if(countofImages===4){
            //swal("Thanks for Uploading all images");
            //navigate('/QuestionPage');
        }
        else{
            swal("Please upload all images");
        }
    }
    return (
        <div style={{ height: "100vh" }}>
            <div className='Logoutbtn'>
                <p style={{ fontWeight: 'bold', paddingRight: '1rem' }}> Username: {username}</p>
                <button type="button" className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </div>
            <div className='row'>
                <div className='col-md-3 col-12'>
                    <div className='imagepreview'>
                    {file.ProfileImage && <img src={file.ProfileImage.image} alt="Preview" style={{ maxWidth: '100%',height:'100%' }} />}
                    </div>
                    <div>
                        <input type="file" className="btn btn-primary uploadbtn" name='ProfileImage' onChange={(e)=>{handleuploadfile(e,"ProfileImage")}}></input>
                    </div>
                    <div>
                        <input type="button" className="btn btn-primary uploadbtn" name='ProfileImage' onClick={() => handleUpload('ProfileImage')} value="Save"></input>
                    </div>
                </div>
                <div className='col-md-3 col-12'>
                    <div className='imagepreview'>
                    {file.Aboutme1 && <img src={file.Aboutme1.image} alt="Preview" style={{ maxWidth: '100%',height:'100%' }} />}
                    </div>
                    <div>
                        <input type="file" className="btn btn-primary uploadbtn" name='Aboutme1' onChange={(e)=>{handleuploadfile(e,"Aboutme1")}}></input>
                    </div>
                    <div>
                        <input type="button" className="btn btn-primary uploadbtn" name='Aboutme1' onClick={() => handleUpload('Aboutme1')} value="Save"></input>
                    </div>
                </div>
                <div className='col-md-3 col-12'>
                    <div className='imagepreview'>
                    {file.Aboutme2 && <img src={file.Aboutme2.image} alt="Preview" style={{ maxWidth: '100%',height:'100%' }} />}
                    </div>
                    <div>
                    <input type="file" className="btn btn-primary uploadbtn" name='Aboutme2'onChange={(e)=>{handleuploadfile(e,"Aboutme2")}}></input>
                    </div>
                    <div>
                        <input type="button" className="btn btn-primary uploadbtn" name='Aboutme2' onClick={() => handleUpload('Aboutme2')} value="Save"></input>
                    </div>
                </div>
                <div className='col-md-3 col-12'>
                    <div className='imagepreview'>
                    { file.ProjectImage && <img src={file.ProjectImage.image} alt="Preview" style={{ maxWidth: '100%',height:'100%' }} />}
                    </div>
                    <div>
                        <input type="file" className="btn btn-primary uploadbtn" name='ProjectImage'onChange={(e)=>{handleuploadfile(e,"ProjectImage")}}></input>
                    </div>
                    <div>
                        <input type="button" className="btn btn-primary uploadbtn" name='ProjectImage' onClick={() => handleUpload('ProjectImage')} value="Save"></input>
                    </div>
                </div>
            </div>
            <div className='DetailsPageSubmit'>
            <button type="button" className="btn btn-primary" onClick={openQuestionPage}  data-toggle="modal" data-target="#exampleModalCenter">
                Let's Start Building  &#x1F60A;
            </button>
            </div>

            
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Let's Check Your Social Quotient</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                                <div className='row' style={{paddingBottom:"20px",paddingTop:"20px"}}>
                                    <span className='col-3'>Linked in :</span><input type='text' name='linkedin' className='col-8' onChange={addSocialMedia} ></input>
                                </div>
                                <div className='row' style={{paddingBottom:"20px",paddingTop:"20px"}}>
                                    <span className='col-3'>Github :</span><input type='text' name='github' className='col-8' onChange={addSocialMedia}></input>
                                </div>
                                <div className='row' style={{paddingBottom:"20px",paddingTop:"20px"}}>
                                    <span className='col-3'>Twitter :</span><input type='text' name='twitter'  className='col-8'onChange={addSocialMedia} ></input>
                                </div>
                                <div className='row' style={{paddingBottom:"20px",paddingTop:"20px"}}>
                                    <span className='col-3'>Instagram :</span><input type='text' name='instagram'  className='col-8' onChange={addSocialMedia}></input>
                                </div>
                                <div className='row' style={{paddingBottom:"20px",paddingTop:"20px"}}>
                                    <span className='col-3'>Youtube :</span><input type='text' name='youtube'  className='col-8' onChange={addSocialMedia}></input>
                                </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={saveMediaChanges} >Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>



        </div>
    )
}
export default Details