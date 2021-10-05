import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MenuBar from '../MenuBar/MenuBar';
import ShowCourse from '../ShowCourse/ShowCourse';
import './OurCourse.css';

const OurCourse = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./CourseDetails.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (

        <div className="course-container">
            <MenuBar></MenuBar>

            <div className="">
                <h1>Our Popular Courses</h1>

            </div>
            <h1>Our Popular Courses</h1>




            <div className=" course-card container">

                {
                    courses.map(course => <ShowCourse
                        course={course}></ShowCourse>)
                }

            </div>
            <Footer></Footer>

        </div>
    );
};

export default OurCourse;