import React from "react";
import MainHeaderImg from "../../../../images/headerChair.png";

const HeaderMain = () => {
  return (
    <main style={{height: '550px' , width: '100%'}} className="row d-flex align-items-center">
      <div className="col-md-4  offset-md-2">
        <h1>
          Your New Smile <br /> Starts Here{" "}
        </h1>
        <p className="text-secondary">
          lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet lorem
          ipsum dolor sit
        </p>
        <div className="btn btn-primary">GET APPOINTMENT</div>
      </div>
      <div className="col-md-5">
        <img src={MainHeaderImg} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
