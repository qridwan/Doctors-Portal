import React, { useState } from "react";
import { Button } from "react-bootstrap";
import AppointmentModal from "../AppointmentModal/AppointementModal";

const ServiceCard = ({ data, date }) => {
  const { subject, visitingHours, totalSeat } = data;

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="col-md-4 mb-3">
      <div
        style={{ border: "1px solid grey", margin: "3px" }}
        className="p-3 text-center"
      >
        <h3 className="text-info">{subject}</h3>
        <h4>{visitingHours}</h4>
        <p>{totalSeat} seats available</p>

        <AppointmentModal
          subject={subject}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          date={date}
        />
        <Button onClick={openModal} className="bg-info">
          BOOK APPOINTMENT
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
