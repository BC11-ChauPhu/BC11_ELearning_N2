import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { http } from '../service/config'
import { useNavigate } from 'react-router-dom'

const CourseList = () => {
    const navigate = useNavigate()

    const settings = {
        dots: true,
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
    return (
        <section id='coursesList'>
            <div className="container">
                <div className="banner">
                    <h2>numerous courses to choose from</h2>
                </div>
                <Slider {...settings} className="coursesList-content ">

                    {courses?.map((item, index) => {
                        return (
                            <div className="courseList-item" onClick={() => {
                                navigate(`/course/${item.maKhoaHoc}/details`)
                            }}>
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