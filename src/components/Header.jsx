import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../img/logo-landing-1.png'

const Header = () => {
  window.onscroll = () => { scrollHeader() }

  const scrollHeader = () => {
    if (document.documentElement.scrollTop > 10) {
      document.querySelector('.header').classList = 'header active'
    } else {
      document.querySelector('.header').classList = 'header'
    }
  }

  return (
    <header className='header'>
      <div className="container">
        <nav>
          <div className="logo">
            <NavLink><img src={logo}/></NavLink>
          </div>
          <div className="navlinks">
            <NavLink className='navlinks-item' to='/'>Home</NavLink>
            <NavLink className='navlinks-item' to='/'>Features</NavLink>
            <NavLink className='navlinks-item' to='/'>Explore</NavLink>
            <NavLink className='navlinks-item' to='/'>What's New</NavLink>
            <NavLink className='navlinks-item' to='/'>Pricing</NavLink>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header