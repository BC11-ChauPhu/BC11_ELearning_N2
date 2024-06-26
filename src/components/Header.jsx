import React, { useEffect } from 'react'
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
              <NavLink className='navlinks-item' to='/'>Log In</NavLink>
              <NavLink className='navlinks-item' to='/'>Sign Up</NavLink>
            </div>
          </nav>
        </div>
      </header>
      <section id="loginForm">
          <div className="loginForm-content">
            <div className="loginForm-title">
              <h4>Create a new account</h4>
            </div>
            <div className="loginForm-form">
              <form>
                <div className="form-group">
                  <input type="text" id="username" placeholder='Username' />
                </div>
                <div className="form-group">
                  <input type="email" id="email" placeholder='Email'/>
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
          </div>
      </section>
    </>

  )
}

export default Header