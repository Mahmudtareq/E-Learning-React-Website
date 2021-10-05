import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ServiceData from '../ServiceData/ServiceData';
import './Home.css';
const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./serviceData.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <div className="service-container my-5">
            <Header></Header>
            <div>
                <h1 className="text-primary">We Provide services</h1>
                <p className="text-info">Always we are trying to provide Our best service ,as much as possible !!!!</p>
                <div className="service-item container my-4">
                    {
                        services.map(service => <ServiceData
                            key={service.name}
                            service={service}></ServiceData>)
                    }
                </div>

            </div>
            <div className="row d-flex align-items-center justify-content-center my-5  ">
                <h1 className="text-primary mb-3">Our
                    Mission And Vision </h1>
                <p className="my-3">Every Children in this world ! Ensure there basic education </p>
                <div className="col-md-6 col-12">
                    <img src="https://static8.depositphotos.com/1594308/1073/i/600/depositphotos_10733076-stock-photo-attention.jpg" alt="" />


                </div>
                <div className="col-md-6 col-12">
                    <p className="text-muted text-design">TOGETHER WE CAN MAKE A DIFFERENCE</p>
                    <h1 className="text-design">Every child deserves <br />the chance to learn.</h1>
                    <p className="mt-3 text-design">
                        Every child deserves the chance to learn.
                        Across the globe, 617 million children are missing basic math and reading skills. We’re a nonprofit delivering the education they need, and we need your help. You can change the course of a child’s life.</p>
                    <Button className="btn btn-primary   ">Give Them Change</Button>

                </div>
            </div>

            <Footer></Footer>
        </div>

    );
};

export default Home;