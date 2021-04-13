import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './HeaderBusinessCard.css'

const HeaderBussinessCard = ({ infos }) => {
  return (
    <div className="col-md-4">
     <div className={`d-flex card-container card-${infos.background}  align-items-center justify-content-center` }>
     <div className="px-2 icon">
     <FontAwesomeIcon icon={infos.icon} />
      </div>
      <div className="">
        <h5>{infos.heading}</h5>
        <small>{infos.description}</small>
      </div>
     </div>
    </div>
  );
};

export default HeaderBussinessCard;
