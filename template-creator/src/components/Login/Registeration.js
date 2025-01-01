import React, { useState } from 'react'
import '../../css/Login.css'
import { useNavigate } from 'react-router-dom';

const Registeration=()=>{

    const [FirstName,setFirstName] = useState('');
    const [LastName,setLastName] = useState('');
    const [DateofBirth,setDateofBirth] = useState('');
    const [EmailId,setEmailId] = useState('');
    const [PhoneNumber,setPhoneNumber] = useState('');
    const [Password,setPassword] = useState('');
    const [ConfirmPassword,setConfirmPassword] = useState('');
    const [UserName,setUserName] = useState('');
    const [UserNameError,setUserNameError] = useState('');
    const [DateofBirthError,setDateofBirthError] = useState('');

    const navigate = useNavigate();


    const [Errors,setErrors]=useState({});

    const[FormData,setFormData] = useState({
        FirstName:'',
        LastName:'',
        DateofBirth:'',
        EmailId:'',
        PhoneNumber:'',
        Password:'',
        ConfirmPassword:'',
        UserName:''
    });
    
    const handleFormSubmit=(event)=>{
        let formData = FormData;
        event.preventDefault();
        let flag=true;
        for(const formfield in FormData){
            if(FormData[formfield]===''){
                alert('All Fields are mandatory');
                flag=false;
                break;
            }
        }
        if(!(formData.ConfirmPassword===formData.Password)){
            flag=false;
           setErrors({...Errors,["ConfirmPassword"]:'Password and ConfirmPassword doesnt match'});
        }else{
            flag=true;
            setErrors({...Errors,["ConfirmPassword"]:''});
        }
        if(flag===true){
            debugger;
            console.log(formData);
            RegisterUser()
           
            
        }
    }

    const RegisterUser = async()=>{
        const response = await fetch('http://localhost:5000/api/register', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify({
                formData:FormData
            })
        });
        if (!response.ok) {
            throw new Error('Registration failed');
        }
        
        const data = await response.json();

        const filePath = 'http://localhost:5000'+data.qrFilePath;
        navigate('/QRCodePopup',{state:{QRFilePath:filePath,userId:UserName}})
        //window.open(filePath);

    }

    const handleUsername = (event)=>{
        event.preventDefault();
        let value =  event.target.value;
        let name = event.target.name;
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@*])[a-zA-Z0-9_@*-]{3,16}$/;
        if(regex.test(value)){
            setUserName(event.target.value)
            //setUserNameError('');
            setErrors({...Errors,[name]:''})
        }else{
            // setUserNameError('UserName must have 1capital,1small & 1special character');
            setErrors({...Errors,[name]:'UserName must have 1capital,1small & 1special character'})
        }
    }

    const handleBirthDate=(event)=>{
        let name = event.target.name;
        const dateofbirth = new Date(event.target.value);
        const todaysDate = new Date()
        if(dateofbirth<todaysDate){
            setDateofBirth(dateofbirth)
            //    setDateofBirthError('');
            setErrors({...Errors,[name]:''})

        }else{
            //setDateofBirthError('Date of Birth cant be greater than today');
            setErrors({...Errors,[name]:'Date of Birth cant be greater than today'})

        }
    }

    const handlePhoneNumber=(event)=>{
        let value = event.target.value;
        let name = event.target.name;
        if(value.length===10){
            setErrors({...Errors,[name]:''})
        }else{
            setErrors({...Errors,[name]:'Please Enter Valid Phone Number'})
        }
    }
    const handleInputChange=(event)=>{
        const{name,value} =event.target;
        setFormData({...FormData,[name]:value});
    }

    

    return(
        <div className='LoginPage_outerdiv'>
            <div className='LoginPage_innerdiv'>
                <form onSubmit={handleFormSubmit}>
                    <div className='logindiv row heading'>Registeration Form</div>
                    <div className='row-md-2 loginrow' onBlur={handleUsername}>
                        <label className='col-md-6 heading'>UserName:</label><input className='col-md-6' type='text' name='UserName' onChange={handleInputChange}  ></input>
                        {/* <div className='errordiv'>{UserNameError}</div> */}
                        {Errors.UserName&&<div className='errordiv'>{Errors.UserName}</div>}
                    </div>
                    <div className='row-md-2 loginrow'>
                        <label className='col-md-6 heading'>First Name:</label><input className='col-md-6' type='text' name='FirstName' onChange={handleInputChange}></input>
                    </div>
                    <div  className='row-md-2 loginrow '>
                        <label className='col-md-6 heading'>Last Name:</label><input className='col-md-6' type='text' name='LastName' onChange={handleInputChange}></input>
                    </div>
                    <div  className='row-md-2 loginrow ' onBlur={handleBirthDate} id='dateofbirth'>
                        <label className='col-md-6 heading'>Date of Birth:</label><input className='col-md-6' type='date' name='DateofBirth' onChange={handleInputChange}></input>
                       {Errors.DateofBirth && <div className='errordiv'>{Errors.DateofBirth}</div>}
                    </div>
                    <div  className='row-md-2 loginrow '>
                        <label className='col-md-6 heading'>EmailId:</label><input className='col-md-6' type='email' name='EmailId' onChange={handleInputChange}></input>
                    </div>
                    <div  className='row-md-2 loginrow ' onBlur={handlePhoneNumber}>
                        <label className='col-md-6 heading'>Phone Number:</label><input className='col-md-6' type='text' name='PhoneNumber' maxLength={10} onChange={handleInputChange}></input>
                    </div>
                    <div  className='row-md-2 loginrow '>
                        <label className='col-md-6 heading'>Password:</label><input className='col-md-6' type='text' name='Password' onChange={handleInputChange}></input>
                    </div>
                    <div  className='row-md-2 loginrow '>
                        <label className='col-md-6 heading'>Confirm Password:</label><input className='col-md-6' type='text' name='ConfirmPassword' onChange={handleInputChange}></input>
                        {Errors.ConfirmPassword && <div className='errordiv'>{Errors.ConfirmPassword}</div>}
                    </div>
                    <div className='row Registerbtn'>
                        <button className='' >Register</button>
                    </div>
                </form>
                <div className='Logindir'>
                <u><a href='/Login'>Already have an account? Sign In</a></u>
                </div>

            </div>

           
        </div>
    
    )
}

export default Registeration