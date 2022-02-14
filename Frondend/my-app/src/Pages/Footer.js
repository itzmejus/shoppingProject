import React from 'react'
import '../Styles/Footer.css'
import fb from '../media/fb.png'
import youtube from '../media/youtube.png'
import linkedin from '../media/linked.png'
function Footer() {
  return (
    <div className='Footer'>
        <input type='email' placeholder='type your email'/>
        <button>Subscribe</button>
        <img src={fb} alt='img'/>
        <img src={youtube} alt='img'/>
        <img src={linkedin} alt='img'/>
    </div>
  )
}

export default Footer