
import React from 'react';
import { Form, Button, Label } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import './ContactUs.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faGoogle,
    faInstagramSquare,
    faLinkedin,

} from "@fortawesome/free-brands-svg-icons";

const ContactUs = () => {
    return (
        <div className="contact-container">
            <MenuBar></MenuBar>
            <div className="row d-flex align-items-center justify-content-center my-5  p-4">
                <h1 className="">Login Form</h1>
                <div className="col-md-6  bg-info">
                    <div>
                        <h1>Good To see You <br /> again !</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi velit accusamus impedit deleniti quisquam totam quis ullam aut similique dignissimos incidunt voluptates veniam vitae, quidem deserunt voluptas dicta ab inventore.</p>

                    </div>

                </div>
                <div className="col-md-6  login-form">
                    <div className="mt-4 p-4">
                        <Button className="button-design" variant="outline-primary">
                            <small className="me-2"> <FontAwesomeIcon icon={faGoogle} /></small>

                            Continue With Google</Button>
                        <br />
                        <br />
                        <Button className="button-design" variant="outline-primary">
                            <small className="me-2"> <FontAwesomeIcon icon={faFacebookSquare} /></small>
                            Continue With FaceBook</Button>
                        <br />
                        <br />

                        <Button className="button-design" variant="outline-primary">
                            <small className="me-2"> <FontAwesomeIcon icon={faLinkedin} /></small>

                            Continue With Linked</Button>
                        <br />
                        <br />
                        <Button className="button-design" variant="outline-primary">
                            <small className="me-2">
                                <FontAwesomeIcon icon={faInstagramSquare} />

                            </small>
                            Continue With Instragram </Button>
                        <br />
                        <br />

                    </div>
                    <div>
                        <Form>
                            <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Button className="button-design" variant="secondary" size="lg">
                                    Login
                                </Button>
                            </Form.Group>

                        </Form>
                    </div>

                </div>

            </div>




            <Footer></Footer>
        </div>
    );
};

export default ContactUs;