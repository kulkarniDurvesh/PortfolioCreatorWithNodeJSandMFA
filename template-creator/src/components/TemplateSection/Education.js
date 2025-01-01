import React from 'react'
import "../../css/ProfileImage.css"
import "../../css/Education.css"

const Education = (props) => {
  const htmlString = props.QueAns[2]['Q.3']; 
  const htmlString1 = props.QueAns[3]['Q.4']; 
  return (
    <>
      <div className='about_me' style={{ paddingTop: '20px' }}>
        <h4 style={{ borderBottom: '5px solid brown', paddingBottom: '10px' }}>Education</h4>
      </div>
      <div className='about_me'>
        <h6>Education</h6>
      </div>
      <div className='row about_me'>
        <ul>
          <li style={{accentColor:"#41516C"}}>
            <div className="date" style={{ backgroundColor: "#41516C"}}>Engineering</div>
            <div className="title" style={{backgroundColor: "silver"}}>Title 1</div>
            <div className="descr" style={{backgroundColor: "silver"}}>
            <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
            </div>
          </li>
          <li style={{accentColor:"#FBCA3E"}} >
            <div className="date" style={{ backgroundColor: "#f7c11b"}}>12th</div>
            <div className="title"style={{backgroundColor: "#f9ef04"}}>Title 2</div>
            <div className="descr"style={{backgroundColor: "#f9ef04"}}>
            <div dangerouslySetInnerHTML={{ __html: htmlString1 }}></div>
            </div>
          </li>
          {/* <li style={{accentColor:"#E24A68"}}>
            <div className="date">2012</div>
            <div className="title">Title 3</div>
            <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima consequuntur soluta placeat iure totam commodi repellendus ea delectus, libero fugit quod reprehenderit, sequi quo, et dolorum saepe nulla hic.</div>
          </li> */}
          {/* <li style={{accentColor:"#1B5F8C"}}>
            <div className="date">2017</div>
            <div className="title">Title 4</div>
            <div className="descr">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque.</div>
          </li>
          <li style={{accentColor:"#4CADAD"}}>
            <div className="date">2022</div>
            <div className="title">Title 5</div>
            <div className="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.</div>
          </li> */}
        </ul>
      </div>
    </>
  )
}

export default Education