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
            <h1 className="text-primary">Our services</h1>
            <p>Always we are trying to provide Our best service ,as much as possible </p>
            <div className="service-item container my-4">
                {
                    services.map(service => <ServiceData
                        key={service.name}
                        service={service}></ServiceData>)
                }
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Home;