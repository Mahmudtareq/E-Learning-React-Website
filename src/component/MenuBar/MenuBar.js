import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './MenuBar.css';

const MenuBar = () => {
    return (
        <div className="MenuBar-container bg-info vert-align container-fluid p-2" >
            <div className="">
                <div className="row" >
                    <div className="col-md-3  mt-2">
                        <Navbar.Brand className="nav-item" href="#home">TAREQ ACADEMY</Navbar.Brand>

                    </div>
                    <div className="col-md-9">
                        <div className="menu-container ">
                            <ul className="d-flex align-items-end justify-content-end">
                                <NavLink to="/home" className="items">
                                    <li>Home</li>
                                </NavLink>
                                <NavLink to="/about" className="items">
                                    <li>About us</li>
                                </NavLink>
                                <NavLink to="/contact" className="items">
                                    <li>Login</li>
                                </NavLink>
                                <NavLink to="/course" className="items">
                                    <li>Our Course</li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MenuBar;