import React from "react";
import Fluoride from "../../../images/fluoride.png";
import Cavity from "../../../images/cavity.png";
import Whitening from "../../../images/whitening.png";
import ServiceCard from "./ServiceCard";

const ServiceDetails = () => {
  const Services = [
    {
      img: Fluoride,
      title: "Fluoride Treatment",
      details:
        "Quis enim commodo dolor officia incididunt sit eiusmod.Veniam esse consequat mollit duis nostrud deserunt.",
    },
    {
      img: Cavity,
      title: "Cavity Filling",
      details:
        "Quis enim commodo dolor officia incididunt sit eiusmod.Veniam esse consequat mollit duis nostrud deserunt.",
    },
    {
      img: Whitening,
      title: "Teath Whitening",
      details:
        "Quis enim commodo dolor officia incididunt sit eiusmod.Veniam esse consequat mollit duis nostrud deserunt.",
    },
  ];
  return (
    <div className=" d-flex justify-content-center mb-5">
      <div className="w-75 row mb-5">
        {Services.map((service) => (
          <ServiceCard service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
