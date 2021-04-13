import React from "react";
import doctorImg from "../../../images/doctorProfile.png";
import "./AppointmentSection.css";

const AppointmentSection = () => {
  return (
    <section className="make-appointment">
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-none d-md-block">
            <img src={doctorImg} alt="" />
          </div>
          <div className="col-md-6 offset-1 text-white py-5">
            <h5 className="text-primary text-uppercase ">Appointment</h5>
            <h1 className="my-4">
              Make an Appointment <br /> Today
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
