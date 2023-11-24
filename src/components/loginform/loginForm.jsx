import React, { useState } from 'react'
import './loginform.css';
import {BrowserRouter, Link} from 'react-router-dom'

const LoginForm = () => {
  const [popupStyle, showPopup] = useState('hide')
  const popup = () => {
    showPopup('login-popup')
    setTimeout(() => showPopup('hide'), 3000)
  }
  return (
    <div className='cover'>
        <h1>Login</h1>
        <input type="text" placeholder='username' className='input'/> 
        <input type="password" placeholder='password'  className='input'/>

        <div className='login-btn' onClick={popup}>Login</div>
        <p className='text'>Or login with</p> 

        <div className='alt-login'>
          <div  to= 'http://facebook.com' className='facebook'></div>
          <div to='http://google.com' className='google'></div>
        </div>

        <div className={popupStyle}>
          <h3>Login Failed</h3>
          <p>Username or password incorrect</p>
        </div>

    </div>
  )
}

export default LoginForm;