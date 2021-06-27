import dateFormat from "dateformat";
import React, { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import { UserContext } from "../../App";
import AppointmentList from "./ApoointsmentList/AppointmentList";
import AddDoctor from "./Sidebar/AddDoctor";
import Sidebar from "./Sidebar/Sidebar";
import "./Dashboard.css";
const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [userInfo] = useContext(UserContext);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [condition, setCondition] = useState(null);
  const gotoPage = (page) => {
    setCondition(page);
    console.log(condition);
  };

  useEffect(() => {
    const date = dateFormat(selectedDate, "paddedShortDate");

    fetch("https://doctorsportal-22.herokuapp.com/appointmentsByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date: date, email: userInfo.email }),
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [selectedDate, userInfo.email]);

  console.log(appointments);

  return (
    <section className="">
      <div style={containerStyle} className="row ">
        <div className="col-md-2">
          <Sidebar gotoPage={gotoPage}></Sidebar>
        </div>
        {!condition && (
          <>
            {" "}
            <div className="col-md-5 d-flex justify-content-center h-100 my-5">
              <Calendar onChange={handleDateChange} value={new Date()} />
            </div>
            <div className="col-md-5">
              <AppointmentList
                selectedDate={selectedDate}
                appointments={appointments}
              ></AppointmentList>
            </div>
          </>
        )}
        {condition === "addDoctor" && (
          <div className="col-md-6 offset-2  addDoctor">
            <AddDoctor />
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
