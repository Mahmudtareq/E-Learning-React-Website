import Button from '@restart/ui/esm/Button';
import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="">

            <div>
                <MenuBar></MenuBar>
                <div className="row d-flex banner align-items-center justify-content-center my-5">
                    <div className="col-md-6">
                        <h2 className="top-title">
                            Differentiate your <br />classroom and engage <br />
                            every student.
                        </h2>

                        <p className="text-dark mt-4">
                            We empower teachers to support their entire classroom. 80% of US teachers who have used Khan Academy have found us effective.</p>
                        <Button className="btn btn-primary ">Teachers </Button>
                    </div>
                    <div className="col-md-6">
                        <img width="500px" src="https://c4.wallpaperflare.com/wallpaper/413/486/390/blackboard-classroom-college-desk-wallpaper-preview.jpg" alt="" />
                    </div>
                </div>

                <div className="row d-flex align-items-center justify-content-center my-5">
                    <div className="col-md-6">
                        <img src="https://image.shutterstock.com/image-photo/elearning-education-internet-technology-webinar-260nw-1139995139.jpg" alt="" />

                    </div>
                    <div className="col-md-6">
                        <p className="text-muted">LEARNERS AND STUDENTS</p>
                        <h2 className="text-primary">
                            You can learn <br />
                            anything.
                        </h2>
                        <p className="text-dark mt-4">
                            We empower teachers to support their entire classroom. 80% of US teachers who have used Khan Academy have found us effective.</p>
                        <Button className="btn btn-primary">Learns, Start Here</Button>

                    </div>

                </div>

                <div className="my-5">
                    <h1 className="text-success my-4">Join Tareq Academy today</h1>
                    <Button className="button-design btn btn-primary" variant="">Learners
                    </Button>
                    <br />
                    <br />
                    <Button className="button-design btn btn-primary" variant="outline-primary">Parents
                    </Button>
                    <br />
                    <br />
                    <Button className="button-design btn btn-primary" variant="outline-primary">Teachers
                    </Button>
                    <br />
                    <br />
                    <Button className="button-design btn btn-primary" variant="outline-primary">Give Today
                    </Button>


                </div>
                <Footer></Footer>

            </div>
        </div>
    );
};

export default AboutUs;