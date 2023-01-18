import React, { useContext } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import './Nav.css'
import Resume from './Resume.pdf'
import { ThemeContext } from '../App';

function Nav() {
  const Data = useContext(ThemeContext);

  return (
    <div>
        <nav>
            <ul>
                <li><a href="https://github.com/saharat-kosum" target='_blank' rel="noopener noreferrer"><GitHubIcon/></a></li>
                <li style={{cursor:'pointer'}} onClick={Data.toggleTheme}>{Data.theme ? <DarkModeIcon/>:<LightModeIcon/>}</li>
                <li><a className='resume' rel="noopener noreferrer" href={Resume} target='_blank'>Resume</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav