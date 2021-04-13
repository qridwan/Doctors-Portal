import React from "react";
import MainHeaderImg from "../../../images/headerChair.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentHeader = ({ handleCalender }) => {
  return (
    <main
      style={{ height: "550px", width: "100%" }}
      className="row d-flex align-items-center"
    >
      <div className="col-md-4  offset-md-2">
        <h2>APPOINTMENT</h2>
        <Calendar onChange={handleCalender} value={new Date()} />
      </div>
      <div className="col-md-5">
        <img src={MainHeaderImg} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default AppointmentHeader;
