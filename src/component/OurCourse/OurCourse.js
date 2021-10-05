import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';

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

        <div className="course-container my-5">
            <MenuBar></MenuBar>
            <div className="my-5 p-2">
                <div className="mt-4">
                    <h1 className="text-primary fw-900 mt-5">Our Popular Course</h1>
                    <p>Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.
                        <br />
                        We are always try to provide best course what are students need !!
                    </p>
                </div>

                <div>
                    <div className=" course-card container ">
                        {
                            courses.map(course => <ShowCourse
                                key={course.name}
                                course={course}></ShowCourse>)
                        }

                    </div>

                </div>


            </div>

            <Footer></Footer>

        </div>
    );
};

export default OurCourse;