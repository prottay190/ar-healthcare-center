import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import TopHospital from '../TopHospital/TopHospital';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopHospital></TopHospital>
            <Services></Services>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;