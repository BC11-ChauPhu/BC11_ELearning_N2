import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 mt-3 mt-md-0">
            <h3>about us</h3>
            <ul>
              <li><a href="">Our Vision</a></li>
              <li><a href="">Code of Conduct</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mt-3 mt-md-0">
            <h3>get in touch</h3>
            <ul>
              <li><a href="">FAQs</a></li>
              <li><a href="">Give us feeback</a></li>
              <li><a href="">Contact us</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mt-3 mt-md-0">
            <h3>legal inquiries</h3>
            <ul>
              <li><a href="">Terms and Condition</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Cookie Policy</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mt-3 mt-md-0">
            <h3>connect with us</h3>
            <ul>
              <li><a href=""><i class="fa-brands fa-facebook-f"></i>Facebook</a></li>
              <li><a href=""><i class="fa-brands fa-twitter"></i>Twitter</a></li>
              <li><a href=""><i class="fa-brands fa-instagram"></i>Instagram</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mt-3 mt-md-0">
            <NavLink className='corp-logo'>
              <img src='../logo.svg' alt="" />
            </NavLink>
          </div>
        </div>
        <div className="footer-copyright">
          <p>2024 © E-Learning / Cybersoft</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer