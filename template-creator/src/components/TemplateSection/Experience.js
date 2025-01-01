import React from 'react'
import "../../css/ProfileImage.css"
import "../../css/style.css"
const Experience = () => {
  return (
    <>
      <div className='about_me' style={{paddingTop:'20px'}}>
            <h4 style={{borderBottom:'5px solid brown',paddingBottom:'10px'}}>My Experience</h4>
        </div>
        <div className='about_me'>
            <h6>Experience</h6>
        </div>
        <div className='row about_me'>
            {/* <div className='about_me_flex row' >
                <div className='col-5 about_me_flex_img'>
                    <img src={images[currentImageIndex]} alt='Durvesh' style={{height:'100%',borderTopLeftRadius: '1rem',borderBottomLeftRadius:'1rem'}}></img>
                </div>  
                <div className='col-7'>

                </div>  

            </div> */}
                <ul>
                    <li style={{accentColor:'#41516C'}}>
                        <div className="date"style={{ backgroundColor: "#41516C"}}>2023</div>
                        <div className="title"style={{backgroundColor: "silver"}}><b>Product Engineer</b></div>
                        <div className="descr"style={{backgroundColor: "silver"}}>
                                Join me as I take a moment to share some insights from my journey as a product engineer. Over the years, I've had the privilege of working on various aspects of product development, both on the frontend and backend. From conceptualizing designs to tackling complex issues, each step has been a learning experience filled with challenges and triumphs.<br/>

                                <b>1.Striking a Balance Between Form and Function:</b><br/>
                                As a product engineer, my goal has always been to create experiences that seamlessly blend aesthetics with functionality. Whether it's designing user interfaces or architecting backend systems, I strive to strike the perfect balance, ensuring our products not only look great but also perform flawlessly.<br/>

                                <b>2.Innovating Tools for Streamlined Processes:</b><br/>
                                One of the highlights of my journey has been the opportunity to develop innovative tools that streamline our workflows. From data management to appointment scheduling, these tools have not only saved time but have also improved overall efficiency within our team.<br/>

                                <b>3.Leveraging Technology for Enhanced Connectivity:</b><br/>
                                Integrating our products with platforms like Google Cloud Platform has been a game-changer. The scalability and reliability offered by GCP have enabled us to expand our capabilities and reach new heights in terms of performance and scalability.<br/>

                                <b>4.Navigating Through Challenges with Resilience:</b><br/>
                                Like any journey, mine has had its fair share of challenges. From production issues to unexpected setbacks, each obstacle has presented an opportunity for growth. Through perseverance and teamwork, we've been able to overcome these challenges and emerge stronger than ever.<br/>
                        </div>
                    </li>
                    {/* <li style={{accentColor:'#FBCA3E'}}>
                        <div className="date">2007</div>
                        <div className="title">Title 2</div>
                        <div className="descr">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam.</div>
                    </li>
                    <li style={{accentColor:'#E24A68'}}>
                        <div className="date">2012</div>
                        <div className="title">Title 3</div>
                        <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima consequuntur soluta placeat iure totam commodi repellendus ea delectus, libero fugit quod reprehenderit, sequi quo, et dolorum saepe nulla hic.</div>
                    </li> */}
                    <li style={{accentColor:"#1B5F8C"}}>
                        <div className="date" style={{ backgroundColor: "#1B5F8C"}}>2022</div>
                        <div className="title"style={{backgroundColor: "#61b3ec"}}>Software Developer</div>
                        <div className="descr"style={{backgroundColor: "#61b3ec"}}>
                            <b>1.Evolution in Action: Navigating Version Shifting with Precision:</b><br/>
                            Witness the transformation as I led the migration journey from jQuery 1.0.6 to 3.4, a monumental shift that required meticulous planning and execution. Through strategic upgrades and compatibility adjustments, I ensured a seamless transition, unlocking new possibilities for our projects.<br/>

                            <b>2.Automation Revolution: Crafting Efficiency through Bot-powered Projects:</b><br/>
                            Delve into the realm of automation as I spearheaded the creation of projects powered by bots, revolutionizing our workflows. From streamlining repetitive tasks to enabling intelligent decision-making, these projects have elevated efficiency to new heights, empowering teams to focus on innovation.<br/>

                            <b>3.Defending the Digital Fortress: Tackling Security Challenges Head-on:</b><br/>
                            Experience the adrenaline rush as I confronted security threats during crucial product releases. With swift action and strategic safeguards, I safeguarded our systems against vulnerabilities, ensuring the integrity and trustworthiness of our products in the ever-evolving digital landscape.<br/>

                            <b>4.Mastery in Deployment: Navigating the Path to Seamless Code Deployment:</b><br/>
                            Explore the intricacies of code deployment as I honed my skills in Continuous Integration/Continuous Deployment (CICD) pipelines and manual builds. Through a blend of automation and meticulous attention to detail, I facilitated smooth and reliable deployments, minimizing downtime and maximizing productivity.<br/>

                            <b>5.Recognition for Excellence: Celebrating Speed and Precision in Problem-solving:</b><br/>
                            Join me in relishing the moments of recognition earned for my swift resolution of challenges within the company. With a relentless focus on speed and precision, I've earned the trust and admiration of peers and leaders alike, setting a standard of excellence for problem-solving.<br/>
                        </div>
                    </li>
                    {/* <li style={{accentColor:"#4CADAD"}}>
                        <div className="date">2022</div>
                        <div className="title">Title 5</div>
                        <div className="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.</div>
                    </li> */}
                </ul>
                {/* <div className="credits"><a target="_blank" href="https://www.freepik.com/free-vector/infographic-template-with-yearly-info_1252895.htm">inspired by</a></div> */}
            </div>
    </>
  )
}

export default Experience