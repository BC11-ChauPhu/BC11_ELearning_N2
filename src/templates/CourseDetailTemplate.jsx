import React, { createContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export let NotificationContext = createContext()

export default function CourseDetailTemplate() {
  const showNotification = (content, type) => {
    const options = {
      autoClose: 2000,
      position: 'top-left',
    };
    switch (type) {
      case 'error':
        return toast.error(content, options)
      default:
        break;
    }
  }

  return (
    <NotificationContext.Provider value={{ handleNotification: showNotification }}>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </NotificationContext.Provider>


  )
}