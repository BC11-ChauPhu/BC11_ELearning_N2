import React from 'react'
import CourseList from '../components/CourseList'
import Banner from '../components/Banner'
import MainBanner from '../components/MainBanner'

const Home = () => {
    return (
        <>  
            <MainBanner/>
            <Banner/>
            <CourseList/>
        </>
    )
}

export default Home