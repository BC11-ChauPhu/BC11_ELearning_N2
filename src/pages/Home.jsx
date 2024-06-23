import React from 'react'
import CourseList from '../components/CourseList'
import Banner from '../components/Banner'
import MainBanner from '../components/MainBanner'
import SubBanner from '../components/SubBanner'

const Home = () => {
    return (
        <>  
            <MainBanner/>
            <Banner/>
            <SubBanner/>
            <CourseList/>
        </>
    )
}

export default Home