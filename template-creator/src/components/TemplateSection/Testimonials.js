import React from 'react'
import "../../css/ProfileImage.css"

const Testimonials = () => {
  return (
    <>
      <div className='about_me' style={{paddingTop:'20px'}}>
            <h4 style={{borderBottom:'5px solid brown',paddingBottom:'10px'}}>My Testimonial</h4>
        </div>
        <div className='about_me'>
            <h6>Testimonial</h6>
        </div>
        <div className='row about_me'>
            <div className='about_me_flex row' >
                <div className='col-5 about_me_flex_img'>
                    {/* <img src={images[currentImageIndex]} alt='Durvesh' style={{height:'100%',borderTopLeftRadius: '1rem',borderBottomLeftRadius:'1rem'}}></img> */}
                </div>  
                <div className='col-7'>

                </div>  

            </div>
        </div>
    </>
  )
}

export default Testimonials