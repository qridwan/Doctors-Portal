import React from 'react';
import AppointmentSection from './AppointmentSection/AppointmentSection';
import Blogs from './Blogs/Blogs';
import Contact from './Contact/Contact';
import Doctors from './Doctors/Doctors';
import Footer from '../Sheared/Footer/Footer';
import Header from './Header/Header';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services/>
            <AppointmentSection/>
            <Testimonials/>
            <Blogs/>
            <Doctors/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;