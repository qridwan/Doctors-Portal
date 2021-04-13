import React from "react";
import img from "../../../images/doctor-sm.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
const Doctor = ({ doctor }) => {
  console.log("🚀 ~ file: Doctor.js ~ line 6 ~ Doctor ~ doctor", doctor);
  return (
    <div className="col-md-4 col-sm-6 text-center">
      <img
        style={{ height: "200px" }}
        src={`data:image/png;base64,${doctor.image?.img}`}
        alt=""
      />
      <h4>{doctor.name}</h4>
      <p>
        {" "}
        <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} />{" "}
        +880-188-934789
      </p>
    </div>
  );
};

export default Doctor;
