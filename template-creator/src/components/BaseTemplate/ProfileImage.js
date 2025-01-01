import React from 'react'
import "../../css/ProfileImage.css"
const ProfileImage = () => {
  return (
    <div>
        <div className='rightSection_outer' >
            <img src='http://localhost:5000/ProfileImage.jpg' className='rightSection_inner' alt='ProfileImage' />
        </div>
    </div>
  )
}

export default ProfileImage