import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function CourseDetailTemplate() {
  const showNotification = (content, type) => {
      const options = {
        autoClose : 2000,
        position: 'top-left',
      }
  }

  

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}