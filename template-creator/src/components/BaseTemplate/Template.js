import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import {useLocation } from 'react-router-dom';
import "../../css/ProfileImage.css"
import "../../css/DarkMode.css"
import HomePage from './HomePage';
import About from './About';
import { useNavigate } from 'react-router-dom';
import Project from '../TemplateSection/Project';
import Skills from '../TemplateSection/Skills';
import Education from '../TemplateSection/Education';
import Experience from '../TemplateSection/Experience';
import Walls from '../TemplateSection/Walls';
import Testimonials from '../TemplateSection/Testimonials';
import Contact from '../TemplateSection/Contact';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const Template = ({ activeComponent }) => {

  // const scrollToRef  = useRef();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  const projectRef = useRef(null);
  const skillRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const wallRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);

  const [active, setActive] = useState('homepage');
  const [darkMode, setDarkMode] = useState(false);
  const sections = useRef([]);
  const navigate = useNavigate();
  const username = sessionStorage.getItem('UserName');
  const location = useLocation();
  const { QueAns } = location.state || {};


  // window.addEventListener('scroll',function(){
  //   let current = '';

  //   sections.forEach(section =>{
  //     const sectionTop = section.offsetTop/3;
  //     const sectionHeight = section.clientHeight;
  //     if(window.scrollY>sectionTop){
  //       current = section.getAttribute('id');
  //       setActive(current);

  //     }
  //   })

  // });

  useEffect(() => {
    if (username === undefined || username === '' || username === null) {
      navigate('/Login');
    } else {
      debugger;
      sections.current = document.querySelectorAll('section');
      const handleScroll = () => {
        let current = '';
        sections.current.forEach(section => {
          const sectionTop = section.offsetTop / 1.1;
          if (window.scrollY > sectionTop) {
            current = section.getAttribute('id');
            setActive(current);
          }
        });
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const scrollToPage = (data) => {
    if (data === 'homepage') {
      homeRef.current.scrollIntoView();
    } else if (data === 'about') {
      aboutRef.current.scrollIntoView();
    } else if (data === 'project') {
      projectRef.current.scrollIntoView();
    } else if (data === 'skill') {
      skillRef.current.scrollIntoView();
    } else if (data === 'education') {
      educationRef.current.scrollIntoView();
    } else if (data === 'experience') {
      experienceRef.current.scrollIntoView();
    } else if (data === 'wall') {
      wallRef.current.scrollIntoView();
    } else if (data === 'testimonial') {
      testimonialRef.current.scrollIntoView();
    } else if (data === 'contact') {
      contactRef.current.scrollIntoView();
    }
  }
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <>
      <div className={darkMode ? 'dark-mode' : 'gradientbackground'}>

        <div className='row header_middle blurbackground' style={{ backgroundColor: "transparent", opacity: "0.9", color: "aliceblue" }}>
          <Header activeComponent={active} RenderingPage={scrollToPage} />
          <button onClick={toggleDarkMode} className="dark-mode-toggle" style={{zindex: "99999",marginLeft: "20px",borderRadius: "20px"}}>
            {darkMode ? <LightModeIcon/>  : <DarkModeIcon/>}
          </button>
        </div>
        <section ref={homeRef} id='homepage' style={{ paddingTop: '30px' }}>
          <HomePage />
        </section>

        {/* <div className='row'>
           <Body QueAns={QueAns}/>
        </div> */}
        <section ref={aboutRef} id='about'>
          <About QueAns={QueAns}/>
        </section>
        <section ref={projectRef} id='project'>
          <Project QueAns={QueAns} />
        </section>
        <section ref={skillRef} id='skill'>
          <Skills QueAns={QueAns} />
        </section>
        <section ref={educationRef} id='education'>
          <Education QueAns={QueAns} />
        </section>
        <section ref={experienceRef} id='experience'>
          <Experience QueAns={QueAns} />
        </section>
        {/* <section ref={wallRef} id='wall'>
          <Walls />
        </section>
        <section ref={testimonialRef} id='testimonial'>
          <Testimonials />
        </section> */}
        <section ref={contactRef} id='contact'>
          <Contact />
        </section>
      </div>
    </>
  )
}

export default Template