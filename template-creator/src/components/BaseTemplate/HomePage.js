import React, { useEffect } from 'react'
import "../../css/ProfileImage.css"
import ProfileImage from './ProfileImage';
const HomePage =()=>{
    const links = sessionStorage.getItem('SocialMediaAccounts');
    console.log(sessionStorage.getItem('SocialMediaAccounts'));

    const socialMedialinks = JSON.parse(links);
    useEffect(()=>{
        
    })
    return (
        <>
              
            <div className='row makemiddle'>
            <div className='rightSection'>
                    <ProfileImage />
            </div>
            </div>
            <h1 className='homepage_center_name'><b>Hi, I'm {sessionStorage.getItem("FullName")}</b></h1>
            <h2 className='home_page_desc'>I am a Full Stack Software  <br/>Developer, Building <br/>one code of line at a time</h2>

            <div className='row homepagebtn'>
                <button className='download-cv-btn'> Download CV</button>
                <button className='circle-btn'><a href={socialMedialinks.linkedin}><img className='img_btn_home' src='/linkedinimage.jpg' alt="iamge"></img></a></button>
                <button className='circle-btn'><a href={socialMedialinks.github}><img className='img_btn_home' src='/githubimage.png' alt="iamge"></img></a></button>
                <button className='circle-btn'><a href={socialMedialinks.twitter}><img className='img_btn_home' src='/twitterimage.png' alt="iamge"></img></a></button>
                <button className='circle-btn'><a href={socialMedialinks.instagram}><img className='img_btn_home' src='/instagramimage.jpeg' alt="iamge"></img></a></button>
                <button className='circle-btn'><a href={socialMedialinks.youtube}><img className='img_btn_home' src='/youtubeimage.png' alt="iamge"></img></a></button>
            </div>
            <div className='row' style={{height:'4rem',padding:'5px'}}>
            {/* <div className='home_page_vertical_separator'>
            
            </div> */}
            </div>
            
        </>
    )
}
export default HomePage;