import React from 'react'
import Header from './Header'
import ProfileImage from './ProfileImage'
import { useLocation } from 'react-router-dom';
import "../../css/ProfileImage.css"
import Body from './Body'
const Template = () => {

  const location = useLocation();
  const { QueAns } = location.state || {};
  
  return (
    <>
        <div className='row'>
            <div className='col-10'>
                <Header />
            </div>
            <div className='rightSection'>
                <ProfileImage />
            </div>
        </div>
        <hr /> 
        <div className='row'>
           <Body QueAns={QueAns}/>
        </div>
    </>
  )
}

export default Template