import './App.css';
import Header from './Body/Header';
import Aboutme from './Body/Aboutme';
import Portfolio from './Body/Portfolio';
import { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from './Nav/Nav'

export const ThemeContext = createContext(null);

function App() {
  const [theme,setTheme]=useState(false);
  const toggleTheme = ()=>{
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className={theme ? 'Darkmode': ''}> 
        <Nav/>
        <div className='container'>
          <Header/>
          <Aboutme/>
          <Portfolio/>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
