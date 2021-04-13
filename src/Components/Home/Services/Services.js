import React from 'react';
import ExceptionalService from './ExceptionalService';
import ServiceDetails from './ServiceDetails';
import ServicesHeader from './ServicesHeader';

const Services = () => {
    return (
        <section>
            <ServicesHeader/>
            <ServiceDetails/>
            <ExceptionalService/>
        </section>
    );
};

export default Services;