import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './HeaderBusinessCard.css'

const HeaderBussinessCard = ({ infos }) => {
  return (
    <div className="col-md-4 mb-2">
     <div className={`row card-container card-${infos.background} align-items-center justify-content-center mx-1` }>
     <div className="col-md-3 px-2 icon">
     <FontAwesomeIcon icon={infos.icon} />
      </div>
      <div className="col-md-8">
        <h5>{infos.heading}</h5>
        <small>{infos.description}</small>
      </div>
     </div>
    </div>
  );
};

export default HeaderBussinessCard;
