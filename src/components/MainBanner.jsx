import React from 'react'
import img from '../img/online-6204349_1920.jpg'

const MainBanner = () => {
    return (
        <section id="mainBanner" style={{backgroundImage: `url(${img})`}}>
            <div className="container">
                <div>MainBanner</div>
            </div>
        </section>
    )
}

export default MainBanner