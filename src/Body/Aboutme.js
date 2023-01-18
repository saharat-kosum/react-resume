import React, { useContext } from 'react'
import './Aboutme.css'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CircleIcon from '@mui/icons-material/Circle';
import { ThemeContext } from '../App';

const Aboutme = () => {
  const Data = useContext(ThemeContext);

  return (
    <div>
      <div className='aboutme'>
        <h1>About me</h1>
        <p className={`aboutmeDetail ${Data.theme ? 'Dark': 'Light'}`}>As a process engineer in the semiconductor industry, 
          I have developed strong problem-solving and process improvement skills. 
          In my spare time, I have taught myself a variety of front-end development technologies, 
          including HTML, CSS, JavaScript, React, and Node.js. 
          I am excited to transition into a new career as a front-end developer, 
          where I can use my technical skills to build easy-to-use and user-friendly web applications.
          I am a quick learner and enthusiastic about continuing to learn and grow as a developer.</p>
      </div>
      <div className='skill'>
        <h1>Skills</h1>
        <div className='fullstack'>
          <div className={`frontend ${Data.theme ? 'Dark': 'Light'}`}>
            <h2>Frontend Development</h2>
            <div className='pcontainer'>
              <p>HTML<br/><CircleIcon style={{ fontSize:"small" }}/><CircleIcon style={{ fontSize:"small" }}/><CircleIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/></p>
              <p>CSS<br/><CircleIcon style={{ fontSize:"small" }}/><CircleIcon style={{ fontSize:"small" }}/><CircleIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/></p>
              <p>JavaScript<br/><CircleIcon style={{ fontSize:"small" }}/><CircleIcon style={{ fontSize:"small" }}/><CircleIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/></p>
              <p>React JS<br/><CircleIcon style={{ fontSize:"small" }}/><CircleIcon style={{ fontSize:"small" }}/><CircleIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/></p>
            </div>
          </div>
          <div className={`backend ${Data.theme ? 'Dark': 'Light'}`}>
            <h2>Backend Development</h2>
            <div className='pcontainer'>
              <p>Node JS<br/><CircleIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/></p>
              <p>Python<br/><CircleIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/></p>
              <p>MongoDB<br/><CircleIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/></p>
              <p>SQL<br/><CircleIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/><RadioButtonUncheckedIcon style={{ fontSize:"small" }}/></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme