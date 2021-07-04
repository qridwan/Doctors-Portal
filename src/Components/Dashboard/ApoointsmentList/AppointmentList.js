import dateFormat from "dateformat";
import React, { useState } from "react";
import "./AppointmentList.css";

const AppointmentList = ({ appointments, selectedDate }) => {
  // const [showAllAppointments, setShowAllAppointments] = useState(false);

  // if (selectedDate == "") {
  //   setShowAllAppointments(true);
  // }

  return (
    <div className="table">
      {selectedDate === "" ? (
        <>
          <h3 className="text-primary text-center">Your Appointment History</h3>
        </>
      ) : (
        <>
          <h3 className="text-primary text-center">Know Your Appointments By Date</h3>
          <p className=" text-center">{dateFormat(selectedDate, "fullDate")}</p>
        </>
      )}
      <div className="scroll-table">
        <table>
          <thead>
            <th>Patient Name</th>
            <th>Services</th>
            {selectedDate === "" ? <th>Date</th> : <th>Serial No:</th>}
            <th>ID</th>
          </thead>
          {appointments.map((obj, index) => (
            <tr key={obj._id}>
              <td>{obj.name}</td>
              <td>{obj.service}</td>
              {selectedDate === "" ? <td>{obj.date}</td> : <td>{index + 1}</td>}
              <td>{obj._id}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AppointmentList;
