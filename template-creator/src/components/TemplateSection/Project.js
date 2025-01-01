import React from 'react'
import "../../css/ProfileImage.css"
import "../../css/Project.css"


const Project = (props) => {
    debugger;
    const htmlString = props.QueAns[1]['Q.2']; 
  return (
    <>
      <div className='about_me' style={{paddingTop:'20px'}}>
            <h4 style={{borderBottom:'5px solid brown',paddingBottom:'10px'}}>My Projects</h4>
        </div>
        <div className='about_me'>
            <h6>Project Done</h6>
        </div>
        <div className='row about_me '>
            <div className='project_flex row' >
                <div className='col-md-5 col-12 about_me_flex_img'>
                    <img src="http://localhost:5000/ProjectImage.jpg" alt='Durvesh' style={{height:'300px',width: '300px',borderTopLeftRadius: '1rem',borderBottomLeftRadius:'1rem'}} ></img>
                </div>  
                {/* <div className='col-md-7 col-12'style={{padding:"10px 50px 10px 50px"}}>
                Greetings! 🚀 I'm a dynamic Fullstack Software Engineer, driving advancements in technology to empower organizations globally. Proficient in a diverse tech stack including Java, Spring Framework, PostgresSQL, JavaScript, TypeScript, React, C#, .NET, Material-UI, Tailwind, Redux, and more, I contribute to the architecture and development of high-performance applications.

Beyond coding, I thrive on creating empowering and collaborative environments, championing technological innovation, and fostering connections to push the boundaries of excellence.

As a Gamer🎮, and a Footballer⚽️, I bring passion to both my professional and personal pursuits. A Wanderlust🛣️ enthusiast and Orophile⛰️, I thrive on exploring diverse landscapes. A Melomane🎵 and avid TV😍 enthusiast, I find joy in the finer aspects of life. Also, a proud enthusiast of Tea☕️ who appreciates bike rides, beaches, and mountains alike.

Always eager to connect with like-minded professionals and individuals who share a zest for technology, innovation, and life's adventures.

Let's push boundaries together! 🌐

                </div>   */}
                <div className='col-md-7 col-12' dangerouslySetInnerHTML={{ __html: htmlString }}></div>


            </div>
        </div>
        <div className='row about_me '>
            <div className='project_flex row' >
                <div className='col-5 about_me_flex_img'>
                    {/* <img src={images[currentImageIndex]} alt='Durvesh' style={{height:'100%',borderTopLeftRadius: '1rem',borderBottomLeftRadius:'1rem'}}></img> */}
                </div>  
                <div className='col-7'>

                </div>  


            </div>
        </div><div className='row about_me'>
            <div className='project_flex row' >
                <div className='col-5 about_me_flex_img'>
                    {/* <img src={images[currentImageIndex]} alt='Durvesh' style={{height:'100%',borderTopLeftRadius: '1rem',borderBottomLeftRadius:'1rem'}}></img> */}
                </div>  
                <div className='col-7'>

                </div>  


            </div>
        </div><div className='row about_me'>
            <div className='project_flex row' >
                <div className='col-md-5 col-12 about_me_flex_img' style={{width:'90vw'}}>
                    {/* <img src={images[currentImageIndex]} alt='Durvesh' style={{height:'100%',borderTopLeftRadius: '1rem',borderBottomLeftRadius:'1rem'}}></img> */}
                </div>  
                <div className='col-md-7 col-12'>
               
                </div>  


            </div>
        </div>

        
    </>
  )
}

export default Project