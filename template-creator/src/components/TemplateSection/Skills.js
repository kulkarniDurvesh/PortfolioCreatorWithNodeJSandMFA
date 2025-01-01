import React, { useEffect } from 'react'
import "../../css/ProfileImage.css"
import "../../css/Skills.css"

const Skills = () => {
  const list1 = localStorage.getItem("SkillList").split(',');

  return (
    <>
      <div className='about_me' style={{ paddingTop: '20px' }}>
        <h4 style={{ borderBottom: '5px solid brown', paddingBottom: '10px' }}>My skills</h4>
      </div>
      <div className='about_me'>
        <h6>skills</h6>
      </div>
      <div className='row about_me'>
        <div className='myskills_flex row' >

          <div class="ag-format-container">
            <div class="ag-courses_box">
              {list1.indexOf('mysql')>=0 &&<div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg">
                  </div>

                  <div class="ag-courses-item_title">
                    <img src='/mysql-removebg-preview.png' alt='' className='myskillimages'></img>
                  </div>

                  <div class="ag-courses-item_date-box">
                    MySql
                  </div>
                </a>
              </div>}

              {list1.indexOf('react')>=0 &&<div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>

                  <div class="ag-courses-item_title">
                    <img src='/logo192.png' alt='' className='myskillimages'></img>
                  </div>

                  <div class="ag-courses-item_date-box">
                    ReactJs
                  </div>
                </a>
              </div>}

              {list1.indexOf('python')>=0 &&<div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>

                  <div class="ag-courses-item_title">
                    <img src='/python.png' alt='' className='myskillimages'></img>
                  </div>

                  <div class="ag-courses-item_date-box">
                    Python
                  </div>
                </a>
              </div>}

              {list1.indexOf('html5')>=0 &&<div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>

                  <div class="ag-courses-item_title">
                    <img src='/html.png' alt='' className='myskillimages'></img>
                  </div>

                  <div class="ag-courses-item_date-box">
                    HTML 5
                  </div>
                </a>
              </div>}

              {list1.indexOf('javascript')>=0 &&<div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>

                  <div class="ag-courses-item_title">
                    <img src='/javascript.png' alt='' className='myskillimages'></img>
                  </div>

                  <div class="ag-courses-item_date-box">
                    JavaScript
                  </div>
                </a>
              </div>}

              {list1.indexOf('c#')>=0 &&<div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>

                  <div class="ag-courses-item_title">
                    <img src='/csharp.png' alt='' className='myskillimages'></img>
                  </div>

                  <div class="ag-courses-item_date-box">
                    C#
                  </div>
                </a>
              </div>}

            </div>
          </div>

          <div class="ag-format-container">
            <div class="ag-courses_box">
            {list1.indexOf('css3')>=0 &&<div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg">
                  </div>

                  <div class="ag-courses-item_title">
                    <img src='/css3.png' alt='' className='myskillimages'></img>
                  </div>

                  <div class="ag-courses-item_date-box">
                    CSS
                  </div>
                </a>
              </div>}

              {list1.indexOf('springboot')>=0 &&<div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>

                  <div class="ag-courses-item_title">
                    <img src='/springboot.png' alt='' className='myskillimages'></img>
                  </div>

                  <div class="ag-courses-item_date-box">
                    Spring Boot
                  </div>
                </a>
              </div>}

              {list1.indexOf('springframework')>=0 &&<div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>

                  <div class="ag-courses-item_title">
                    <img src='/springframework.png' alt='' className='myskillimages'></img>
                  </div>

                  <div class="ag-courses-item_date-box">
                    Spring Framework
                  </div>
                </a>
              </div>}

              {list1.indexOf('net')>=0 &&<div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>

                  <div class="ag-courses-item_title">
                    <img src='/netcore.png' alt='' className='myskillimages'></img>
                  </div>

                  <div class="ag-courses-item_date-box">
                     .NET Core
                  </div>
                </a>
              </div>}

              {list1.indexOf('bootstrap')>=0 &&<div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>

                  <div class="ag-courses-item_title">
                    <img src='/Bootstrap.png' alt='' className='myskillimages'></img>
                  </div>

                  <div class="ag-courses-item_date-box">
                    BootStrap
                  </div>
                </a>
              </div>}

              {list1.indexOf('redux')>=0 &&<div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>

                  <div class="ag-courses-item_title">
                    <img src='/reduxToolkit.png' alt='' className='myskillimages'></img>
                  </div>

                  <div class="ag-courses-item_date-box">
                    Redux Toolkit
                  </div>
                </a>
              </div>}

            </div>
          </div>




        </div>
      </div>
    </>
  )
}

export default Skills