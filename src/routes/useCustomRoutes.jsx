import React from 'react'
import HomeTemplates from '../templates/HomeTemplates'
import Home from '../pages/Home'
import { useRoutes } from "react-router-dom"

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
        }
    ])
  return myRoutes
}

export default useCustomRoutes