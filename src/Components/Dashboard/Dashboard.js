import dateFormat from 'dateformat';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import AppointmentList from './ApoointsmentList/AppointmentList';
import AddDoctor from './Sidebar/AddDoctor';
import Sidebar from './Sidebar/Sidebar';


const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect( () => {
       const date = dateFormat(selectedDate, 'paddedShortDate')
       
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({date})
        })
        .then(res=>res.json())
        .then(data => setAppointments(data))
    }, [selectedDate]);
console.log(appointments);

const [condition, setCondition] = useState(null);
const gotoPage = (page) => {
    setCondition(page);
    console.log(condition);
}
    return (
        <section className="">
        <div style={containerStyle} className="row ">
            <div className="col-md-2">
                <Sidebar gotoPage={gotoPage}></Sidebar>
            </div>
           { !condition && <> <div className="col-md-5 d-flex justify-content-center h-100 my-5">
            <Calendar
                onChange={handleDateChange}
                value={new Date()}
            />
            </div>
            <div className="col-md-5">
                <AppointmentList selectedDate={selectedDate} appointments={appointments}></AppointmentList>
            </div></>}
            {
                condition === "addDoctor" && <div className="col-md-6 offset-2 my-5">
                    <AddDoctor/>
                </div>
            }
        </div>
    </section>
    );
};

export default Dashboard;