import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import './Portfolio.css'

const Portfolio = () => {
  const Data = useContext(ThemeContext);
  
  return (
    <div className='Portfolio'>
      <h1 className='mt-5 ms-4'>Portfolio</h1>
      <div className="d-flex justify-content-center">
        <div className='Portcontainer gap-4'>
          <div className={`PortCard ${Data.theme ? 'Dark': 'Light'}`}>
            <img className='portImage' alt='PortImage' src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80' />
            <h2 className='Portname'>Web Practice</h2>
            <div className='btncontainer'>
              <div className={`btnn ${Data.theme ? 'black': 'white'}`}>
                <a href="https://github.com/saharat-kosum/web-practice" target='_blank' rel="noopener noreferrer">Git hub</a>
              </div>
              <div className={`btnn ${Data.theme ? 'black': 'white'}`}>
                <a href="https://myweb-practice.netlify.app/" target='_blank' rel="noopener noreferrer">Demo</a>
              </div>
            </div>
          </div>
          <div className={`PortCard ${Data.theme ? 'Dark': 'Light'}`}>
            <img className='portImage' alt='PortImage' src='https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1441&q=80' />
            <h2 className='Portname'>Income Record (Full Stack Project)</h2>
            <div className='btncontainer'>
              <div className={`btnn ${Data.theme ? 'black': 'white'}`}>
                <a href="https://github.com/saharat-kosum/IncomeAndExpenseRecord-frontend" target='_blank' rel="noopener noreferrer">Git hub frontend</a>
              </div>  
              <div className={`btnn ${Data.theme ? 'black': 'white'}`}>
                <a href="https://github.com/saharat-kosum/IncomeAndExpenseRecord-backend" target='_blank' rel="noopener noreferrer">Git hub backend</a>
              </div>  
              <div className={`btnn ${Data.theme ? 'black': 'white'}`}>
                <a href="https://income-and-expense-record.netlify.app/" target='_blank' rel="noopener noreferrer">Demo</a>
              </div>
            </div>
          </div>
          <div className={`PortCard ${Data.theme ? 'Dark': 'Light'}`}>
            <img className='portImage' alt='PortImage' src='https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80  ' />
            <h2 className='Portname'>Movie Shop</h2>
            <div className='btncontainer'>
              <div className={`btnn ${Data.theme ? 'black': 'white'}`}>
                <a href="https://github.com/saharat-kosum/movie-shop-local-storage" target='_blank' rel="noopener noreferrer">Git hub</a>
              </div>
              <div className={`btnn ${Data.theme ? 'black': 'white'}`}>
                <a href="https://movie-shop-localstorage.netlify.app/" target='_blank' rel="noopener noreferrer">Demo</a>
              </div>
            </div>
          </div>
          <div className={`PortCard ${Data.theme ? 'Dark': 'Light'}`}>
            <img className='portImage' alt='PortImage' src='https://images.unsplash.com/photo-1598791318878-10e76d178023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
            <h2 className='Portname'>To do list</h2>
            <div className='btncontainer'>
              <div className={`btnn ${Data.theme ? 'black': 'white'}`}>
                <a href="https://github.com/saharat-kosum/to-do-list-local-storage" target='_blank' rel="noopener noreferrer">Git hub</a>
              </div>
              <div className={`btnn ${Data.theme ? 'black': 'white'}`}>
                <a href="https://myapp-to-do-list-localstorage.netlify.app/" target='_blank' rel="noopener noreferrer">Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer'></div>
    </div>
  )
}

export default Portfolio