import React, { useState } from 'react';
import Footer from '../Sheared/Footer/Footer';
import NavigationBar from '../Sheared/Navbar/Navbar';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';

import AvailableAppointment from './AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date()) 
    const handleCalender = (data) => {
        setSelectedDate(data);
    }
    return (
        <div>
            <NavigationBar/>
            <AppointmentHeader handleCalender={handleCalender}/>
            <AvailableAppointment selectedDate={selectedDate}/>
            <Footer/>
        </div>
    );
};

export default Appointment;