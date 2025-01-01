import React, { useState } from 'react'
import '../../css/Login.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoginName } from '../../store/UserSlice'

const Login = () => {

    const [UserName,setUserName]=useState('');
    const [MFACode,setMFACode]=useState('');
    const [isLogin,setIsLogin] = useState('');
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [formData,setFormData]=useState({
        UserName:'',
        PassWord:'',
        MFACode:''
    })

    const [Errors,setErrors]=useState({
        UserName:'',
        PassWord:'',
        MFACode:'',
        Login:''
    });

    // const handleInput=(event)=>{
    //     let name = event.target.name;
    //     let value = event.target.value;
    //     setFormData({...formData,[name]:value});
    //     setErrors({...Errors,[name]:''});

    // }
    // const validateUserName=(event)=>{
    //     let value = event.target.value;
    //     let name = event.target.name;
    //     debugger;
    //     let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@*])[a-zA-Z0-9_@*-]{3,16}$/;
    //     if(!regex.test(value) || value == ''){
    //         setErrors({...Errors,[name]:'UserName must have 1Capital,1small & 1special character'})
    //         debugger;
    //         return false;
    //     }else{
    //         setFormData({...formData,[name]:value})
    //         setErrors({...Errors,[name]:''})
    //         return true;
    //     }
    // }

    // // const validatePassword = (value)=>{
    // //     return true;
    // // }
    // const validateMFACode = (event)=>{
    //     let value = event.target.value;
    //     let name = event.target.name;

    //     debugger;
    //     let regex = /^\d{6}$/;
    //     if(!regex.test(value) || value == ''){
    //         setErrors({...Errors,[name]:'MFA Code is 6-digit number'})
    //         debugger;
    //         return false;
    //     }else{
    //         setFormData({...formData,[name]:value})
    //         setErrors({...Errors,[name]:''})
    //         return true;
    //     }
    // }

    // const validatePassWord = (event)=>{
    //     let value = event.target.value;
    //     let name = event.target.name;
    //     setFormData({...formData,[name]:value});
    // }

    // const handleLoginSubmit=(event)=>{
    //     event.preventDefault();
    //     debugger;
    //     let flag = true;
    //     let LoginData = formData;

    //     for(var fields in LoginData)
    //     {
    //         if(LoginData[fields]==='')
    //         {
    //             setErrors({...Errors,[fields]:'This field is required'});
    //             flag=false;
    //             debugger;
    //             break;
    //         }
           
            
    //     }

    //     console.log(flag);

    //     if(flag===true)
    //     {
    //     debugger;
    //     LoginFunctionality();
    //     }
            
    // }


    
    const handleInput = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...Errors, [name]: '' });
    };

    const validateUserName = (event) => {
        const { value, name } = event.target;
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@*])[a-zA-Z0-9_@*-]{3,16}$/;
        if (!regex.test(value) || value === '') {
            setErrors({ ...Errors, [name]: 'UserName must have 1 Capital, 1 small, & 1 special character' });
            return false;
        }
        return true;
    };

    const validatePassWord = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateMFACode = (event) => {
        const { value, name } = event.target;
        const regex = /^\d{6}$/;
        if (!regex.test(value) || value === '') {
            setErrors({ ...Errors, [name]: 'MFA Code must be a 6-digit number' });
            return false;
        }
        return true;
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        let flag = true;
        const LoginData = formData;

        for (let field in LoginData) {
            if (LoginData[field] === '') {
                setErrors({ ...Errors, [field]: 'This field is required' });
                flag = false;
                break;
            }
        }

        if (flag) {
            debugger;
            // Call your login functionality here
            console.log("Dispatching action:",formData.UserName );
            dispatch(setLoginName(formData.UserName));
            LoginFunctionality(event);
        }
    };

    const LoginFunctionality=async(event)=>{
        const name = event.target.name;
        debugger
        const response = await fetch('http://localhost:5000/api/Login',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify({
                formData:formData
            })
        });

        if(!response.ok){
            throw new Error('Failed to Login');
        }

        const data = await response.json();

        const {verified} = data;
        if(verified){
            setIsLogin('')
            const FullName  = data.firstName+" "+data.lastName;
            sessionStorage.setItem("FullName",FullName);
            sessionStorage.setItem('UserName',formData.UserName);
            navigate('/Details')
        }
        else{
            setIsLogin('Login Failed')
            debugger;
        }
    }

  return (
    <div>
        <div className='LoginPage_outerdiv'>
            <div className='LoginPage_innerdiv row'>
                <div className='col-6'>
                    <img src='/download1.jpeg' style={{width:'100%',height:'100%'}}></img>
                </div>
                <div className='col-6'>
                    <h1>Login</h1>
                    <form onSubmit={handleLoginSubmit}>
                        <input type='text' name='UserName' placeholder='Please Enter User Name' className='LoginInput' onBlur={validateUserName} onChange={handleInput}></input>
                        {Errors.UserName && <div className='errordiv'>{Errors.UserName}</div>}
                        <input type='password' name='PassWord' placeholder='Please Enter Password' className='LoginInput' onBlur={validatePassWord} onChange={handleInput} ></input>
                        {Errors.PassWord && <div className='errordiv'>{Errors.PassWord}</div>}
                        <input type='text' name='MFACode' placeholder='Please Enter Second Password' className='LoginInput' onBlur={validateMFACode} onChange={handleInput}></input>
                        {Errors.MFACode && <div className='errordiv'>{Errors.MFACode}</div>}
                        <div className='LoginSubmitbtn'>
                        <button className='Loginbtn' name='Login' >Login</button>
                        </div>
                    </form>
                    <div className='errordivLogin'>{isLogin}</div>
                    <div className='Registerationdir' >
                        <u><a href='/'>Don't have an account? Sign Up</a></u>
                    </div>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default Login