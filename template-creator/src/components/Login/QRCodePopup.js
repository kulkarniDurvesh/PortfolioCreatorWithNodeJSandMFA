import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../../css/QRCodePopup.css'

const QRCodePopup = () => {
    const [QRCode,setQRCode] = useState('');
    const [Error,setError] = useState('');

    const location = useLocation();
    const {QRFilePath,userId} = location.state;
    const navigate = useNavigate();

    const handleRegisteration= async()=>{
        if(QRCode === ''){
            setError('Please Enter Code to proceed');
            return;
        }else{
            setError('');
            debugger;
            console.log(QRCode+userId);
            const response = await fetch('http://localhost:5000/api/verify',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    token:QRCode,
                    userId:userId
                })

            });

            const data = await response.json();
            const {verified} = data;

            if(!response.ok){
                throw new Error('Error in Verifying');
            }
            if(response.ok){
                if(verified){
                    setError('');
                    navigate('/Login');
                }
                else{
                    setError('Verification Failed Please Try again');
                }
            }
        }
        
    }

    const handleQRCode=(event)=>{
        let value = event.target.value;
        setQRCode(value);
    }

  return (
    <div className='QRCode_outer' >
        <div className='QRCode_inner'>
            <div className='col-4'>
                <img  src={QRFilePath} alt='QRCode'/>
            </div>
            <div className='col-8'>
                <div className='row-9'>
                    <h4>Please Scan This QR Code in Google Authenticator App</h4>
                    <input type='text' className='QRCodeVerify' placeholder='Please enter Verification Code' onBlur={handleQRCode} ></input>
                    <div className='errordiv'>{Error}</div>
                </div>
                <div className='row-3 QRCodeNext'>
                    <button className='nextbtn' onClick={handleRegisteration}>Verify</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QRCodePopup