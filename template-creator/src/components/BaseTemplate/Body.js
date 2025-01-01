import React from 'react'
import Experience from './Experience'
import Education from './Education'
import Keyword from './Keywords'
import ExtraCurricularActivities from './ExtraCurricularActivities'
import Declaration from './Declaration'

const Body = (props) => {

  return (
    <div style={{marginLeft:"3rem",width:'100vw'}}>
        <div className='row-2'>
           <Keyword ans={props.QueAns[0]['Q.1']} /> 
        </div>
        <div className='row-2'>
           <Experience ans={props.QueAns[1]['Q.2']}/> 
        </div>
        <div className='row-2'>
           <Education ans={props.QueAns[2]['Q.3']} /> 
        </div>
        <div className='row-2'>
           <ExtraCurricularActivities ans={props.QueAns[3]['Q.4']} /> 
        </div>
        <div className='row-2'>
           <Declaration /> 
        </div>
    </div>
  )
}

export default Body