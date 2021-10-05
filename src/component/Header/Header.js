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
                            Bring Tutoring Right <br /> o Your Home.
                        </h1>
                        <p className="text-dark text-center mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        <button className="mt-3 about-btn">REGISTER NOW</button>
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