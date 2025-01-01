import React, { useState } from 'react'
import "../../css/Header.css"
const Header = ({ activeComponent,RenderingPage }) => {

  //const [activeComponent,setActiveComponent] = useState('homepage');
  const setPage = (event)=>{
    debugger;
    let name = event.target.name;
    RenderingPage(name);  
    //activeComponent(name);
  }

  return (
    <div>
        <div className='middleSection row'>
            {/* <div className='row-4'><label>Durvesh Kulkarni</label></div>
            <div className='row-2'><label>MobileNo:</label><span value="MobileNo">7066916579</span></div>
            <div className='row-2'><label>Email:</label><span value="Email">durveshkulkarni55@gmail.com</span></div>
            <div className='row-2'><label>Instagram:</label><span value="Instagram">durveshkulkarni55@gmail.com</span></div>
            <div className='row-2'><label>GitHub:</label><span value="GitHub">durveshkulkarni55@gmail.com</span></div> */}
            <div className='row'>
              <h1 style={{margin: '10px'}}>{sessionStorage.getItem("FullName")}</h1>
              <div className='navbar_flex'>
              {/* <button className={activeComponent ==='homepage'?'navbar_option active':'navbar_option'} name='homepage' onClick={scrollToHome} >Home</button>
              <button className={activeComponent ==='about'?'navbar_option active':'navbar_option'} name='about' onClick={scrollToAbout} >About</button> */}
              <button className={activeComponent ==='homepage'?'navbar_option active':'navbar_option'} name='homepage' onClick={setPage} >Home</button>
              <button className={activeComponent ==='about'?'navbar_option active':'navbar_option'} name='about' onClick={setPage} >About</button>
                <button className={activeComponent ==='project'?'navbar_option active':'navbar_option'} name='project' onClick={setPage} >Project</button>
                <button className={activeComponent ==='skill'?'navbar_option active':'navbar_option'} name='skill' onClick={setPage} >Skills</button>
                <button className={activeComponent ==='education'?'navbar_option active':'navbar_option'} name='education' onClick={setPage} >Education</button>
                <button className={activeComponent ==='experience'?'navbar_option active':'navbar_option'} name='experience' onClick={setPage} >Experience</button>
                {/* <button className={activeComponent ==='wall'?'navbar_option active':'navbar_option'} name='wall' onClick={setPage} >Walls</button>
                <button className={activeComponent ==='testimonial'?'navbar_option active':'navbar_option'} name='testimonial' onClick={setPage} >Testimonial</button> */}
                <button className={activeComponent ==='contact'?'navbar_option active':'navbar_option'} name='contact' onClick={setPage} >Contact</button>
              </div>
            </div>

        </div>

    </div>
  )
}

export default Header