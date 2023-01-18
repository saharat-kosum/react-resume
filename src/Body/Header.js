import React from 'react'
import './Header.css'
import ME from './Profile2.jpg'
import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <div>
        <Nav/>
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