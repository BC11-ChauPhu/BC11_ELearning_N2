import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { http } from '../service/config'

const CourseList = () => {

    const settings = {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 3000

    };
    const [courses, setCourses] = useState([])
    useEffect(() => {
        http
            .get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc')
            .then((res) => {
                setCourses(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    console.log(courses)
    return (
        <section id='coursesList'>
            <div className="container">
                <div className="banner">
                    <h2>NUMEROUS COURSES <br /> TO CHOOSE FORM</h2>
                </div>
                <Slider {...settings} className="coursesList-content ">

                    {courses?.map((item, index) => {
                        return (
                            <div className="courseList-item">
                                <div className="courseList-image">
                                    <img src={item.hinhAnh} alt="" />
                                </div>
                                <div className="courseList-info">
                                    <p>{item.tenKhoaHoc}</p>
                                </div>
                            </div>
                        )
                    })}
                </Slider>



            </div>
        </section>

    )
}

export default CourseList