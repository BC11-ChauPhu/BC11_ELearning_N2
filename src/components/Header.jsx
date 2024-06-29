import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../img/logo-landing-1.png'

const Header = () => {
  const scrollHeader = () => {
    if (document.documentElement.scrollTop > 10) {
      document.querySelector('.header').classList = 'header active'
    } else {
      document.querySelector('.header').classList = 'header'
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader)
    return () => {
      window.removeEventListener('scroll', scrollHeader)
    }
  }, [])

  const loginFormRef = useRef(null)
  const signUpFormRef = useRef(null)

  const handleClickOutside = (event) => {
    if (event.target.className === 'active') {
      if (loginFormRef.current && !loginFormRef.current.contains(event.target)) {
        document.querySelector('#loginForm').classList.remove('active')
      }
      if (signUpFormRef.current && !signUpFormRef.current.contains(event.target)) {
        document.querySelector('#signUpForm').classList.remove('active')
      }
    }
  }

  window.addEventListener('click', handleClickOutside)



  return (
    <>
      <header className='header'>
        <div className="container">
          <nav>
            <div className="logo">
              <NavLink to='/home'><img src={logo} /></NavLink>
            </div>
            <div className="navlinks">
              <NavLink className='navlinks-item' to='/home'>Home</NavLink>
              <NavLink className='navlinks-item' to='/'>Features</NavLink>
              <NavLink className='navlinks-item' to='/'>Explore</NavLink>
              <NavLink className='navlinks-item' to='/'>What's New</NavLink>
              <NavLink className='navlinks-item' to='/' onClick={() => {
                document.querySelector('#loginForm').classList.toggle('active')
              }}>Log In</NavLink>
              <NavLink className='navlinks-item' to='/' onClick={() => {
                document.querySelector('#signUpForm').classList.toggle('active')
              }}>Sign Up</NavLink>
            </div>
          </nav>
        </div>
      </header>
      <section id="loginForm" >
        <div className="loginForm-content" ref={loginFormRef}>

          <div className="loginForm-title">
            <h4>Log in with your account</h4>
          </div>

          <div className="loginForm-form">
            <form>
              <div className="form-group">
                <input type="email" id="email" placeholder='Email' />
              </div>
              <div className="form-group">
                <input type="password" placeholder='Password' />
              </div>
              <div className="form-group">
                <button type="submit">LOG IN</button>
              </div>
            </form>
          </div>
          <p className='loginForm-link-bottom'>Don't you have an account yet? <a href=""><span>Sign up now</span></a></p>

        </div>
      </section>

      <section id="signUpForm" >
        <div className="signUp-content" ref={signUpFormRef}>

          <div className="signUp-title">
            <h4>Log in with your account</h4>
          </div>

          <div className="signUp-form">
            <form>
              <div className="form-group">
                <input type="text" id="username" placeholder='Username' />
              </div>
              <div className="form-group">
                <input type="email" id="email" placeholder='Email' />
              </div>
              <div className="form-group">
                <input type="password" placeholder='Password' />
              </div>
              <div className="form-group">
                <input type="password" placeholder='Repeat Password' />
              </div>
              <div className="form-group">
                <button type="submit">Sign Up</button>
              </div>
            </form>
          </div>
          <p className='signUp-link-bottom'>Aldready have an account? <a href=""><span>Login now</span></a></p>

        </div>
      </section>
    </>

  )
}

export default Header