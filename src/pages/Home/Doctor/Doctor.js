import React from 'react';
import './Doctor.css'

const Doctor = ({doctor}) => {
    const {name, img, work} = doctor;
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <img className="dr-img" src={img} alt="" />
            <h3 className="text-success">Name: {name}</h3>
            <h6 className="text-primary">{work}</h6>
        </div>
    );
};

export default Doctor;