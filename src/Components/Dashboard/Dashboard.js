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
  const [selectedDate, setSelectedDate] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [allAppointments, setAllAppointments] = useState([]);
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

    fetch(" https://doctorsportal-22.herokuapp.com/appointmentsByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date: date, email: userInfo.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAllAppointments(data[0].userAppointments)
        setAppointments(data[0].specificDaysAppointment)
      console.log(data)});
  }, [selectedDate, userInfo.email]);

  console.log(appointments);

  return (
    <section className="w-100">
      <div style={containerStyle} className="row w-100">
        <div className="col-lg-2">
          <Sidebar gotoPage={gotoPage}></Sidebar>
        </div>
        {!condition && (
          <>
            {" "}
            <div className="col-lg-4 col-md-8 col-sm-10 h-100">
              <Calendar className="m-auto border-0" style={{border:"none"}} onChange={handleDateChange} value={new Date()} />
            </div>
            <div className="col-lg-6 col-md-10  col-sm-10 ">
              <AppointmentList
                selectedDate={selectedDate}
                appointments={appointments}
              ></AppointmentList>
            </div>
            <div className="col-lg-8 offset-3 mt-4">
            <AppointmentList
                selectedDate={""}
                appointments={allAppointments}
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
