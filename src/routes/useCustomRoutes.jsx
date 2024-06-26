import React from 'react'
import HomeTemplates from '../templates/HomeTemplates'
import Home from '../pages/Home'
import { useRoutes } from "react-router-dom"
import CourseDetailTemplate from '../templates/CourseDetailTemplate'
import CourseDetailPage from '../pages/CourseDetailPage'

const useCustomRoutes = () => {
    const myRoutes = useRoutes([
        {
            path: "",
            element: <HomeTemplates/>,
            children: [
                {
                    index: true,
                    element: <Home/>
                },
                {
                    path: 'home',
                    element: <Home/>
                }

            ]
        },
        {
            path: 'course/:id',
            element: <CourseDetailTemplate/>,
            children: [
                {
                    path: 'details',
                    element: <CourseDetailPage/>
                }
            ]
        }
    ])
  return myRoutes
}

export default useCustomRoutes