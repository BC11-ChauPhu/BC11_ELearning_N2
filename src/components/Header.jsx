import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../img/logo-landing-1.png'
import { useFormik } from 'formik'
import { http } from '../service/config'

const Header = () => {
  // SCROLL HEADER FUNCTION
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

  // LOGIN AND SIGN UP FORM
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

  // LOGIN HANDLER
  const validate = values => {
    const errors = {}
    if (!/^[A-Z]/.test(values.password)) {
      errors.password = 'Password must start with an uppercase letter *'
    } else if (values.password.length < 8) {
      errors.password = 'Password must have at least 8 characters *'
    }
    return errors
  }

  const logInFunc = () => {
    http
      .post('/api/QuanLyNguoiDung/DangNhap', {
        taiKhoan: formik.values.username,
        matKhau: formik.values.password
      })
      .then((res) => {
        console.log(res.data)
        localStorage.setItem('LoggedInUser', JSON.stringify(res.data))
        window.alert('Login successfully')
        window.location.reload();
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validate,
    onSubmit: values => {
      logInFunc()
    }
  })

  let state = false;
  if (localStorage.getItem('LoggedInUser')) {
    state = true
    // document.querySelector('.header-login').innerHTML = localStorage.getItem('User')
  }

  // SIGNUP HANDLE
  class User {
    constructor(taiKhoan, matKhau, hoTen, soDT, email) {
      this.taiKhoan = taiKhoan
      this.matKhau = matKhau
      this.hoTen = hoTen
      this.soDT = soDT
      this.maNhom = 'GP06'
      this.email = email
    }
  }
  class UserList {
    constructor() {
      this.userList = []
    }
    addUser = function (userObj) {
      this.userList.push(userObj)
    }
  }

  const userArr = new UserList()

  const signUpFunc = () => {
    http
      .post('/api/QuanLyNguoiDung/DangKy', {
        taiKhoan: signUp.values.signUpUserName,
        matKhau: signUp.values.signUpPassword,
        hoTen: signUp.values.fullName,
        soDT: signUp.values.phone,
        maNhom: signUp.values.maNhom,
        email: signUp.values.signUpEmail
      })
      .then((res) => {
        window.alert("Account created successfully")
        let user = new User(signUp.values.signUpUserName, signUp.values.signUpPassword, signUp.values.fullName, signUp.values.phone, signUp.values.signUpEmail)
        userArr.addUser(user)
        localStorage.setItem('UserList', JSON.stringify(userArr.userList))
        window.location.reload();
      })
      .catch((err) => {
        console.log(signUp.values.signUpUserName)
        console.log(typeof(signUp.values.signUpUserName))
        console.log(signUp.values.signUpPassword)
        console.log(signUp.values.fullName)
        console.log(signUp.values.phone)
        console.log(signUp.values.maNhom)
        console.log(signUp.values.signUpEmail)
        console.log(err)
        alert(err)
      })
  }

  const signUpValidate = values => {
    const errors = {}
    if (!/^[A-Z]/.test(values.signUpPassword)) {
      errors.signUpPassword = 'Password must start with an uppercase letter *'
    } else if (values.signUpPassword.length < 8) {
      errors.signUpPassword = 'Password must have at least 8 characters *'
    }
    return errors
  }

  const signUp = useFormik({
    initialValues: {
      signUpUserName: '',
      signUpPassword: '',
      fullName: '',
      phone: '',
      maNhom: 'GP01',
      signUpEmail: ''
    },
    validate: signUpValidate,
    onSubmit: signUpFunc
  })

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
              {
                state ? (
                  <NavLink className='navlinks-item' to='/user'>Profile</NavLink>
                ) : (
                  <NavLink className='navlinks-item header-login' to='/' onClick={() => {
                    document.querySelector('#loginForm').classList.toggle('active')
                  }}>Log In</NavLink>
                )
              }
              {/* <NavLink className='navlinks-item header-login' to='/' onClick={() => {
                document.querySelector('#loginForm').classList.toggle('active')
              }}>Log In</NavLink> */}
              <NavLink className='navlinks-item' onClick={() => {
                localStorage.removeItem('LoggedInUser')
                window.location.reload();
              }}>Log Out</NavLink>
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
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <input type="text"
                  id="username"
                  name='username'
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  placeholder='Username'
                  required />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id='password'
                  name='password'
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  placeholder='Password'
                  required />
                {formik.errors.password ? <div className='form-error-message' >{formik.errors.password}</div> : null}
              </div>
              <div className="form-group">
                <button type="submit">LOG IN</button>
              </div>
            </form>
          </div>
          <p className='loginForm-link-bottom'>Don't you have an account yet? <span onClick={() => {
            document.querySelector('#loginForm').classList.toggle('active')
            document.querySelector('#signUpForm').classList.toggle('active')
          }}>Sign up now</span></p>

        </div>
      </section>

      <section id="signUpForm" >
        <div className="signUp-content" ref={signUpFormRef}>

          <div className="signUp-title">
            <h4>Create a new account</h4>
          </div>

          <div className="signUp-form">
            <form onSubmit={signUp.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="signUpUserName"
                  name='signUpUserName'
                  onChange={signUp.handleChange}
                  value={signUp.values.signUpUserName}
                  placeholder='Username'
                  required />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id='signUpPassword'
                  name='signUpPassword'
                  onChange={signUp.handleChange}
                  value={signUp.values.signUpPassword}
                  placeholder='Password'
                  required />
                {signUp.errors.signUpPassword ? <div className='form-error-message' >{signUp.errors.signUpPassword}</div> : null}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id='fullName'
                  name='fullName'
                  onChange={signUp.handleChange}
                  value={signUp.values.fullName}
                  placeholder='Full Name'
                  required />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  id='phone'
                  name='phone'
                  onChange={signUp.handleChange}
                  value={signUp.values.phone}
                  placeholder='Phone Number'
                  required />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="signUpEmail"
                  name='signUpEmail'
                  onChange={signUp.handleChange}
                  value={signUp.values.signUpEmail}
                  placeholder='Email'
                  required />
              </div>
              <div className="form-group">
                <button type="submit">Sign Up</button>
              </div>
            </form>
          </div>
          <p className='signUp-link-bottom'>Aldready have an account? <span onClick={() => {
            document.querySelector('#signUpForm').classList.toggle('active')
            document.querySelector('#loginForm').classList.toggle('active')
          }}>Login now</span></p>
        </div>
      </section>
    </>

  )
}

export default Header