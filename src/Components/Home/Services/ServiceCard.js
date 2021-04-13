import React from 'react';

const ServiceCard = ({service}) => {
    const {img, title , details} = service ;
    return (
        <div className="col-md-4 text-center mt-2">
            <img src={img} alt="" height="50" className="mb-3"/>
            <h6 className="mb-3">{title}</h6>
            <p className="text-secondary">{details}</p>
        </div>
    );
};

export default ServiceCard;