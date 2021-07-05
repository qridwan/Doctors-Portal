import React, { useEffect, useState } from "react";
import Doctor from "./Doctor";
import SpinGif from "../../../images/Spin.gif";
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [spin, setSpin] = useState(true);

  useEffect(() => {
    fetch("https://doctorsportal-22.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        setSpin(false);
      });
  }, []);
  return (
    <section className="doctors">
      <div className="container">
        <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
        <div className="row">
          {spin && (
            <div className="col-lg-12 text-center">
              <img className="img-fluid " src={SpinGif} alt="spin"  />
            </div>
          )}
          {doctors.map((doctor) => (
            <Doctor key={doctor._id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
