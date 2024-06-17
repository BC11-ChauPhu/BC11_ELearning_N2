import React, { useState, useEffect } from 'react'
import { http } from '../service/config'

const CourseList = () => {
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
                <div className="coursesList-content">

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
                </div>

            </div>
        </section>

    )
}

export default CourseList