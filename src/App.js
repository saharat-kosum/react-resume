import './App.css';
import Header from './Body/Header';
import Aboutme from './Body/Aboutme';
import Portfolio from './Body/Portfolio';
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [theme,setTheme]=useState(false);
  const toggleTheme = ()=>{
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className={theme ? 'Darkmode': ''}>
        <Header/>
        <Aboutme/>
        <Portfolio/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
