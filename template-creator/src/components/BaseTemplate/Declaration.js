import React from 'react'
import "../../css/Common.css"
const Declaration = () => {
  return (
    <>
        <input type='checkbox' name='declaration' ></input>
        <span>I hereby declare that all the information given by me is valid and I take full responsibility of it. </span>
    
        <div className='row' style={{display:'block'}}>
            <div className='savebtn'>
                <input type='button' name='btnSave' value='Save' style={{backgroundColor:'aqua'}}></input>
            </div>
        </div>
    
    
    </>
  )
}

export default Declaration