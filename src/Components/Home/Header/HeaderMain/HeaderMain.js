import React from "react";
import { Link } from "react-router-dom";
import MainHeaderImg from "../../../../images/headerChair.png";

const HeaderMain = () => {
  return (
    <main style={{height: '550px' , width: '100%'}} className="row d-flex align-items-center">
      <div className="col-md-4 col-sm-6 offset-sm-2  offset-md-2 ml-3">
        <h1>
          Your New Smile <br /> Starts Here{" "}
        </h1>
        <p className="text-secondary">
          lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet lorem
          ipsum dolor sit
        </p>
        <div className="btn btn-info"><Link style={{color: "white", textDecoration: "none" }} to="/appointment">GET APPOINTMENT</Link></div>
      </div>
      <div className="col-md-5 my-2 col-sm-10 offset-sm-1 ml-3">
        <img src={MainHeaderImg} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
