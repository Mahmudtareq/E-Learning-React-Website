import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import './Header.css';

const Header = () => {
    return (
        <div className="banner-container ">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">
                    <MenuBar></MenuBar>

                    <div className="col-md-6">
                        <h1 className="title">
                            For every student, <br /> every classroom <br />
                            Real results.
                        </h1>
                        <p className="text-dark text-center mt-3">
                            We’re a nonprofit with the mission to provide a free, world-class <br />
                            education for anyone, anywhere.
                        </p>
                        <button className="m-2 about-btn">Learners</button>
                        <button className="m-2 about-btn">Teachers</button>
                        <button className="m-2 about-btn">Parents</button>
                    </div>
                    <div className="col-md-6">
                        <img src="https://iacademy.qodeinteractive.com/wp-content/uploads/2017/05/h4-img-1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;