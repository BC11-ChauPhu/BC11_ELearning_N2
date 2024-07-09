import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { http } from '../service/config'
import { toast } from 'react-toastify'

const CourseDetail = () => {
    const { id } = useParams()
    const [course, setCourse] = useState([])
    useEffect(() => {
        http
            .get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`)
            .then((res) => {
                setCourse(res.data)
            })
            .catch((err) => {
                toast.error('There was an error, please try again later.', {
                    autoClose: 3000,
                    position: 'top-center',
                })
                console.log(err)
            })
    }, [])
    return (
        <section id="courseDetail">
            <div className="courseDetail-content container">
                <div className="course-img">
                    <img src={course.hinhAnh} alt="" />
                </div>
                <div className="course-info">
                    <h1>{course.tenKhoaHoc}</h1>
                    <p>{course.moTa}</p>
                </div>
            </div>
        </section>
    )
}

export default CourseDetail