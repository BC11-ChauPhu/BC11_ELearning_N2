import React from 'react'
import iamge1 from '../img/online-5059833_1280.jpg'
const Banner = () => {
  return (
    <section id="banner">
      <div className="container banner-content">
        <div className="banner-img">
          <img src={iamge1} alt="" />
        </div>
        <div className="banner-info">
          <h2>Attentive Instructors</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, error laboriosam? Amet unde deleniti est ipsam atque accusamus nulla reprehenderit, odit natus facere magnam dolor enim hic, nihil tenetur sit, architecto quod iste sed? Veniam tempore, modi consequatur doloribus aliquid, enim sapiente similique corrupti reprehenderit perspiciatis repudiandae, dolorem maiores at.</p>
          <button>Learn more <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>

    </section>
  )
}

export default Banner