import React, { useEffect, useState } from 'react';
import "../../css/ProfileImage.css"
const About=(props)=>{

    const [currentImageIndex,setCurrentImageIndex]=useState(0);
    const images=['/FullImage.jpeg','/ProfileImage.jpeg'];

    const htmlString = props.QueAns[0]['Q.1']; 

    useEffect(()=>{
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, 3000);
          return () => clearInterval(interval);
    },[]);
    

    return (
    <>
        <div className='about_me' style={{paddingTop:'20px'}}>
            <h4 style={{borderBottom:'5px solid brown',paddingBottom:'10px'}}>ABOUT ME</h4>
        </div>
        <div className='about_me'>
            <h6>Who Am I in Nutshell</h6>
        </div>
        <div className='row about_me'>
            <div className='about_me_flex row' >
                <div className='col-md-5 col-12 about_me_flex_img'>
                    {/* <img src={images[currentImageIndex]} alt='Durvesh' style={{height:'100%',borderTopLeftRadius: '1rem',borderBottomLeftRadius:'1rem'}}></img> */}

                        <div className="pic-ctn">
                        <img src="http://localhost:5000/Aboutme1.jpg" alt="" className="pic" />
                        <img src="http://localhost:5000/Aboutme2.jpg" alt="" className="pic" />
                        {/* <img src="https://picsum.photos/200/300?t=3" alt="" className="pic" />
                        <img src="https://picsum.photos/200/300?t=4" alt="" className="pic" />
                        <img src="https://picsum.photos/200/300?t=5" alt="" className="pic" /> */}
                        </div>





                </div>  
                <div className='col-md-7 col-12' style={{padding:"10px 50px 10px 50px"}}>
                    {/* Greetings! 🚀 I'm a dynamic Fullstack Software Engineer, driving advancements in technology to empower organizations globally. Proficient in a diverse tech stack including Java, Spring Framework, PostgresSQL, JavaScript, TypeScript, React, C#, .NET, Material-UI, Tailwind, Redux, and more, I contribute to the architecture and development of high-performance applications.

                    Beyond coding, I thrive on creating empowering and collaborative environments, championing technological innovation, and fostering connections to push the boundaries of excellence.

                    As a Gamer🎮, and a Footballer⚽️, I bring passion to both my professional and personal pursuits. A Wanderlust🛣️ enthusiast and Orophile⛰️, I thrive on exploring diverse landscapes. A Melomane🎵 and avid TV😍 enthusiast, I find joy in the finer aspects of life. Also, a proud enthusiast of Tea☕️ who appreciates bike rides, beaches, and mountains alike.

                    Always eager to connect with like-minded professionals and individuals who share a zest for technology, innovation, and life's adventures.

                    Let's push boundaries together! 🌐 */}
                    
                    {/* <p>hi<span class="ql-emojiblot" data-name="laughing">﻿<span contenteditable="false"><span class="ap ap-laughing">😆</span></span>﻿</span></p> */}
                    <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
                </div>  

            </div>
        </div>
    </>
    )
}
export default About