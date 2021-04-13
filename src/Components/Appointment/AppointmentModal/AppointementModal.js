import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
const dateFormat = require("dateformat");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
  },
};

const formStyles = {
  minWidth: "300px",
};
const inputStyles = {
  minWidth: "280px",
  border: "1px solid #17a2b8",
  margin: "10px auto",
  padding: "10px",
};

Modal.setAppElement("#root");
const AppointmentModal = ({ modalIsOpen, closeModal, subject, date }) => {
  function afterOpenModal() {}

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const selectedDate = dateFormat(date, "paddedShortDate");

  const onSubmit = (data) => {
    data.service = subject;
    data.created = new Date().toDateString();

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          closeModal();
          alert("Appointment created successfully.");
        }
      });
  };

  return (
    <div className="">
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="m-5">
          <h5 className="text-info text-center">{subject} </h5>
          <button className="btn btn-warning  px-5 m-3 " onClick={closeModal}>
            ❌
          </button>

          <form style={formStyles} onSubmit={handleSubmit(onSubmit)}>
            <input
              style={inputStyles}
              {...register("name", { required: true })}
              placeholder="Your Name"
            />
            <br />
            {errors.name && <span>This field is required</span>}
            <br />
            <input
              style={inputStyles}
              {...register("cellNumber", { required: true })}
              placeholder="Phone Number"
            />
            <br />
            {errors.cellNumber && <span>This field is required</span>}
            <br />
            <input
              style={inputStyles}
              {...register("email", { required: true })}
              placeholder="Email"
            />
            <br />
            {errors.email && <span>This field is required</span>}
            <br />

            <input
              style={inputStyles}
              type="appointment"
              defaultValue={selectedDate}
              {...register("date", { required: true })}
            />
            <br />
            {errors.date && <span>This field is required</span>}
            <br />

            <input className="btn btn-info" type="submit" />
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AppointmentModal;
