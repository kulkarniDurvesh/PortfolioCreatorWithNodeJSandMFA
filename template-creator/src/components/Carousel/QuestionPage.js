import React, { useEffect, useRef, useState } from 'react'
import "../../css/QuestionPage.css"
import Questionnaire from '../BaseTemplate/Questionnaire';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useNavigate,Navigate } from 'react-router-dom';
import { $ } from 'react-jquery-plugin';
import Template from '../BaseTemplate/Template';
import { useSelector } from 'react-redux';
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import "react-quill/dist/quill.snow.css";
import quillEmoji from "react-quill-emoji";
import "react-quill-emoji/dist/quill-emoji.css";
import swal from 'sweetalert';



const QuestionPage = ()=>{
    //const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()
    const [QuestionNo,setQuestionNo] = useState("");
    const [Question,setQuestion] = useState("");
    const [Count,setCount]=useState(1);
    const navigate = useNavigate();
    const [Answer,setAnswer] = useState("");
    const [jsonArray,setJsonArray]=useState([]);
    const [Mode,setMode] = useState('Answer');
    const [showHideSkills,setShowHideSkills] = useState(false);
    const skillref = useRef(null);
    const [skillItemList,setSkillItemList] = useState([]);

    const [text, setText] = useState('');
    const { transcript, resetTranscript } = useSpeechRecognition();

    const username =  sessionStorage.getItem('UserName');

    useEffect(()=>{
        if(username === undefined || username === ''||username===null){
           navigate('/Login');
        }else{
            setQuestion(Questionnaire[QuestionNo]);
        }
    },[QuestionNo]);

    const handleOutsideClick = (event) => {
        if (skillref.current && !skillref.current.contains(event.target)) {
            setShowHideSkills(false);
        }
    };

    useEffect(()=>{
            document.addEventListener('mousedown',handleOutsideClick);
            return()=>{
                document.removeEventListener("mousedown", handleOutsideClick);
            }
    },[])


    
    const startListening =()=>  {
        //setMode('transcript');
        // if (SpeechRecognition.browserSupportsSpeechRecognition()) {
        //     SpeechRecognition.startListening();
        //   } else {
        //     console.log("Speech recognition not supported by your browser.");
        //   }
         SpeechRecognition.startListening({ continuous: true,language:'en-IN' })
    }

    // if (!browserSupportsSpeechRecognition) {
    //     return null
    // }
  
    const saveChanges=()=>{
        let jsonObj={};
        debugger;
        jsonObj[QuestionNo]=Answer;
        jsonArray.push(jsonObj);
        if(Count===4){
            debugger;
            $('#exampleModalCenter').hide();
            $('body').removeClass('modal-open');
            $('.modal-backdrop').removeClass('modal-backdrop');
            localStorage.setItem("SkillList",skillItemList);
            navigate('/Template',{state:{QueAns:jsonArray}});

        }
        setAnswer("");
        setCount(Count+1);
        setQuestionNo("Q."+(Count+1));
    }

    const handleLogout=()=>{
        sessionStorage.clear();
        navigate('/')    
    }


    const loadFirstQuestion=()=>{
        setQuestionNo("Q."+Count);
        setQuestion(Questionnaire[QuestionNo])
    }

    const handleAnsChange=(event)=>{
        setAnswer(event);
    }

    const stopListening=()=>{
        //setMode('Answer');
        if (transcript) {
            setText(prevText => prevText + transcript + ' '); // Append the transcribed text to the editor
            resetTranscript(); // Reset the transcript after adding it to the editor
          }
        SpeechRecognition.stopListening();
    }

    const showSkillsCard = ()=>{
        setSkillItemList([]);
        setShowHideSkills(true);
    }

    const saveSkilllist = ()=>{
        console.log("list "+skillItemList);
        debugger;
        if(skillItemList.length===0){
            swal("select item first");
        }else{
            swal("list saved");
        }
    }
    const addItemToList=(event)=>{
        debugger;
        let item = event.target.id;
        if($('#'+item)[0].checked){
            setSkillItemList([...skillItemList,item]);
        }else{
            let removedElement = skillItemList.indexOf(item);
            skillItemList.splice(removedElement,1);
            setSkillItemList([...skillItemList]);
        }
        // setSkillItemList([...skillItemList,item]);
        console.log(skillItemList);
    }

    console.log("Transcript:", transcript);
    return (
       
        <div style={{height:"100vh"}}>
                <div className='Logoutbtn'>
                    <p style={{fontWeight:'bold',paddingRight:'1rem'}}> Username: {username}</p>
                    <button type="button" className="btn btn-danger" onClick={handleLogout}>Logout</button>
                </div>
                <div className='row'  style={{height: "50%",marginLeft: "0rem",marginTop: "4rem",display: "flex",justifyContent: "end"}}>
                    <div className='QuestButtons' style={{display: "grid",justifyContent: "end",top:"20vh"}}>
                        <div className='row'>
                        <button type="button" className="btn btn-primary" >
                        Select Template Background
                        </button>
                        </div>
                        <div className='row'>
                        <button type="button" className="btn btn-primary" onClick={showSkillsCard} >
                        Let's Add your skills
                        </button>
                        </div>
                        <div className='row'>
                        <button type="button" className="btn btn-primary" onClick={loadFirstQuestion} data-toggle="modal" data-target="#exampleModalCenter">
                        Let's Learn about You &#x1F609;
                        </button>
                        </div>
                    </div>
                    <div className='col-6'>
                        {showHideSkills&&
                            <div className='' style={{height:"100%",marginLeft:"20px"}}>
                                <div className='skillsets'  ref={skillref}>
                                    <div className='display_skill_card'>
                                        <span>Pick Your Skills</span>
                                    </div>
                                    <div className=''>
                                        <div className='skilllist'>
                                            <div className=''>
                                                <input type='checkbox' id='mysql' onClick={addItemToList}></input>
                                            </div>
                                            <div className=''>
                                                <span>MYSQL</span>
                                            </div>

                                        </div>
                                        <div className='skilllist'>
                                            <div className=''>
                                                <input type='checkbox' id='react'  onClick={addItemToList}></input>
                                            </div>
                                            <div className=''>
                                                <span>React</span>
                                            </div>

                                        </div>
                                        <div className='skilllist'>
                                            <div className=''>
                                                <input type='checkbox' id='html5'  onClick={addItemToList}></input>
                                            </div>
                                            <div className=''>
                                                <span>HTML5</span>
                                            </div>

                                        </div>
                                        <div className='skilllist'>
                                            <div className=''>
                                                <input type='checkbox' id='css3'  onClick={addItemToList}></input>
                                            </div>
                                            <div className=''>
                                                <span>CSS3</span>
                                            </div>

                                        </div>
                                        <div className='skilllist'>
                                            <div className=''>
                                                <input type='checkbox' id='javascript'  onClick={addItemToList}></input>
                                            </div>
                                            <div className=''>
                                                <span>JavaScript</span>
                                            </div>

                                        </div>
                                        <div className='skilllist'>
                                            <div className=''>
                                                <input type='checkbox' id='jquery'  onClick={addItemToList}></input>
                                            </div>
                                            <div className=''>
                                                <span>JQuery</span>
                                            </div>

                                        </div>
                                        <div className='skilllist'>
                                            <div className=''>
                                                <input type='checkbox' id='java' onClick={addItemToList}></input>
                                            </div>
                                            <div className=''>
                                                <span>Java</span>
                                            </div>

                                        </div>
                                        <div className='skilllist'>
                                            <div className=''>
                                                <input type='checkbox' id='net' onClick={addItemToList}></input>
                                            </div>
                                            <div className=''>
                                                <span>.NET Core</span>
                                            </div>

                                        </div>
                                        <div className='skilllist'>
                                            <div className=''>
                                                <input type='checkbox' id='python' onClick={addItemToList}></input>
                                            </div>
                                            <div className=''>
                                                <span>Python</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='display_skill_card'>
                                        <button style={{width: "50%",borderRadius: "5px"}} onClick={saveSkilllist}>Save</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">{QuestionNo}<span>{Question}</span></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ReactQuill id='editor' value={text} onChange={(content)=>{setText(content);handleAnsChange(content)}} 
                            modules={{
                                toolbar: {
                                  container: [
                                    [
                                      { header: "1" },
                                      { header: "2" },
                                      { header: [3, 4, 5, 6] },
                                      { font: [] }
                                    ],
                                    [{ size: [] }],
                                    [{ color: [] }, { background: [] }],
                                    ["bold", "italic", "underline", "strike", "blockquote"],
                                    [{ align: [] }],
                                    [{ list: "ordered" }, { list: "bullet" }],
                                    // ["link", "image", "video"],
                                    ["emoji"],
                                    ["clean"],
                                    ["code-block"]]},"emoji-toolbar": true,"emoji-textarea": true,"emoji-shortname": true}} 
                                     />
                            {/* <textarea id='answerbox' onChange={handleAnsChange} value={Mode==='Answer'?Answer:transcript} style={{width:"100%",height:"100%"}}>{transcript}</textarea> */}
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={startListening}>Start Listening</button>
                        <button type="button" className="btn btn-primary" onClick={stopListening}>Stop Listening</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={saveChanges}>Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>

            {/* {showHideSkills&&
                <div className='skillcard'>
                    <div className='skillsets'>

                    </div>
                </div>
            } */}
           
          
        </div>
    )
}
export default QuestionPage