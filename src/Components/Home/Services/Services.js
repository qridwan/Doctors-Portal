import React from 'react';
import ExceptionalService from './ExceptionalService';
import ServiceDetails from './ServiceDetails';
import ServicesHeader from './ServicesHeader';
import './Services.css'
const Services = () => {
    return (
        <section className="services-container">
            <ServicesHeader/>
            <ServiceDetails/>
            <ExceptionalService/>
        </section>
    );
};

export default Services;