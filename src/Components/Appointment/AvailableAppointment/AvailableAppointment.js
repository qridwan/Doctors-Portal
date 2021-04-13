import React from "react";
import ServiceCard from "./ServiceCard";

const AvailableAppointment = ({ selectedDate }) => {
  const AvailableData = [
    {
      id: 10001,
      subject: "Teeth Orthodontics",
      visitingHours: "8:00 PM - 12:00 PM",
      totalSeat: 12,
    },
    {
      id: 10002,
      subject: "Cosmetic Dentistry",
      visitingHours: "8:00 AM - 12:00 AM",
      totalSeat: 18,
    },
    {
      id: 10003,
      subject: "Teeth Cleaning",
      visitingHours: "9:00 AM - 11:00 AM",
      totalSeat: 10,
    },
    {
      id: 10004,
      subject: "Cavity Protection",
      visitingHours: "8:00 PM - 12:00 PM",
      totalSeat: 2,
    },
    {
      id: 10005,
      subject: "Teeth Orthodontics",
      visitingHours: "8:00 PM - 12:00 PM",
      totalSeat: 19,
    },
    {
      id: 10006,
      subject: "Teeth Orthodontics",
      visitingHours: "8:00 PM - 12:00 PM",
      totalSeat: 10,
    },
  ];
  return (
    <section>
      <h2 className="text-center text-info mb-5">
        Available Appointments on {selectedDate.toDateString()}
      </h2>

      <div className="d-flex justify-content-center">
        <div className="w-75 row">
          {AvailableData.map((service) => (
            <ServiceCard key={service.id} data={service} date={selectedDate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableAppointment;
