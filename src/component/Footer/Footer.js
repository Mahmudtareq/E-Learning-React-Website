import React from "react";
import './Footer.css';
// import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
    faCoffee,
    faPhoneVolume,
    faMapMarkedAlt,
    faPhone,
    faClock
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div>
            <div className="footer-container bg-dark p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-white">
                            <div className="left-container text-start ">
                                <h1>TAcademy</h1>
                                <div className="icons-container d-flex text-center ">
                                </div>
                                <p className="mt-2 ">
                                    <small>
                                        Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home
                                    </small>
                                </p>
                                <p className="">
                                    <small><FontAwesomeIcon icon={faPhone} /> +8801831874069</small>
                                </p>
                                <p className="">
                                    <small><FontAwesomeIcon icon={faClock} />  Mon -Sat 9.00 - 16.00</small>
                                </p>
                                <p className="mt-2">
                                    <small>Tareq © mahmud . All rights reserved.</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 text-white">
                            <h3>Popular Courses</h3>
                            <div className="footer-menu-container mt-4">
                                <p>Web Development</p>
                                <p>Programming</p>
                                <p>Business English</p>
                                <p>Basic Marketing</p>


                            </div>
                        </div>

                        <div className="col-md-4 text-white">
                            <h2>Support</h2>
                            <div className="right-footer-container mt-4">
                                <p>User dashboard</p>
                                <p>Contact</p>
                                <p>FAQ</p>
                                <p>Course Offer</p>
                                <p>Events</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;