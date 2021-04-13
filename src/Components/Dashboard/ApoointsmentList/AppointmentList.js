import dateFormat from "dateformat";
import React from "react";
import './AppointmentList.css'

const AppointmentList = ({ appointments, selectedDate }) => {
  const newDate = dateFormat(selectedDate, "fullDate");
  return (

    <div className="table">
      <h3 className="text-primary text-center">Appointments</h3>
      <p  className=" text-center">{newDate}</p>
     <div className="scroll-table">
     <table>
        <tr>
          <th>Patient Name</th>
          <th>Services</th>
          <th>Serial No:</th>
          <th>ID</th>
        </tr>
        {appointments.map((obj, index) => (
        <tr key={obj._id}>
          <td>{obj.name}</td>
          <td>{obj.service}</td>
          <td>{index+1}</td>
          <td>{obj._id}</td>
        </tr>
      ))}
      </table>
     </div>
      
    </div>
  );
};

export default AppointmentList;
