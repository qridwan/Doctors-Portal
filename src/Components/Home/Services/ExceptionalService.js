import React from 'react';
import ExServiceImg from '../../../images/EXservice.png'
const ExceptionalService = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="w-75 row mb-5">
                <div className="col-md-5 ">
                    <img className="img-fluid" src={ExServiceImg} alt="" / >
                </div>
                <div className="col-lg-6  p-4">
                    <h2>Exceptional Dental <br/> Care, on Your Terms</h2>
                    <p className="text-justify">Sint labore exercitation elit ipsum quis fugiat ad sint. Aute dolor veniam officia anim proident minim. Duis deserunt enim ut consequat tempor. Laborum ea aute Lorem ipsum ea sint magna id.
                    Sint labore exercitation elit ipsum quis fugiat ad sint. Aute dolor veniam officia anim proident minim. Duis deserunt enim ut consequat tempor. Laborum ea aute Lorem ipsum ea sint magna id.</p>

                </div>
            </div>
        </div>
    );
};

export default ExceptionalService;