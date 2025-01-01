import React, { useState } from 'react'
import "../../css/ProfileImage.css"
import "../../css/Contact.css"
import TelegramIcon from '@mui/icons-material/Telegram';
import  swal from 'sweetalert';
import emailjs from "emailjs-com"


const Contact = () => {

  const [contactName,setContactName] = useState('');
  const [contactEmail,setContactEmail] = useState('');
  const [contactMessage,setContactMessage] = useState('');

  const handleSubmitContact=(e)=>{
    debugger;
    e.preventDefault();
    // emailjs.sendForm('service_c1nz7ne', 'template_zg7tvrn', e.target,
    //   'm6IhwwP2O4s2AjN4c')
    //   .then((result) => {
    //     console.log(result.text);
    //   }, (error) => {
    //     console.log(error.text);
    //   });
    
    swal("message recorded ... will contact shortly !! Thank you")
    e.target.reset();

  }

  return (
    <>
      <div className='about_me' style={{paddingTop:'20px'}}>
            <h4 style={{borderBottom:'5px solid brown',paddingBottom:'10px'}}>Contact</h4>
        </div>
        <div className='about_me'>
            <h6>Contact</h6>
        </div>
       <div className='contactcard'>
        <form onSubmit={handleSubmitContact}>
          <div className='contact_field'>
            <div>
            <label>Name:</label>
            </div>
            <div>
            <input type='text' className='contact_inp' id='contact_name' placeholder='Your Name' ></input>
            </div>
          </div>
          <div className='contact_field'>
            <div>
          <label>Email:</label>
          </div>
          <div>
            <input type='email' className='contact_inp' id='contact_email' placeholder='Your Email' ></input>
            </div>
          </div>
          <div className='contact_field'>
            <div>
            <label>Message:</label>
            </div>
            <div>
            <textarea className='contact_inp' id='contact_message' style={{height:'300px',paddingTop:'10px'}} placeholder='Message' ></textarea>
            </div>
          </div>
          <div className='contact_submit'> 
          <div>
            <button className='contact_inp_button'  name='Submit' >Submit <TelegramIcon/> </button>
            </div>
          </div>
          </form>
       </div>
    </>
  )
}

export default Contact