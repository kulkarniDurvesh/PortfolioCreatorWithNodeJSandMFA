import React from 'react'

const Keyword = (props)=>{

    return(
        <>
        <div className="row-1">
                <label>Skills</label>
            </div>
            <div className="row-1">
                <textarea style={{width:'90%',minHeight:'20px', maxHeight:'50px',overflowY:'scroll'}} value={props.ans} readOnly={true} ></textarea>
            </div>
        </>
    )
}

export default Keyword
