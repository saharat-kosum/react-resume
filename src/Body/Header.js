import React from 'react'
import './Header.css'
import ME from './Profile2.jpg'

const Header = () => {
  return (
    <div className='d-flex justify-content-center'>
        <div className='textHeader'>
            <div className='introduce'>
                <p style={{display: 'inline-block'}}>I'm </p><h1 className='myName'>Saharat Kosum</h1>
                <p className='welcome'>Welcome to my resume website.</p>
                <p className='position'>Front-End Developer</p>
            </div>
            <img src={ME} alt='ProfileImg' className='profileImage'/>
        </div>
    </div>
  )
}

export default Header