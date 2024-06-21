import React from 'react'
import img from '../img/online-6204349_1920.jpg'

const MainBanner = () => {
    return (
        <section id="mainBanner" style={{backgroundImage: `url(${img})`}}>
            <div className="container">
                <div className='mainBanner-content'>
                    <p>An Alternative To Classrooms</p>
                    <h1>E-LEARNING</h1>
                    <p>Study Anytime, Anywhere At Your Own Convenience</p>
                </div>
            </div>
        </section>
    )
}

export default MainBanner