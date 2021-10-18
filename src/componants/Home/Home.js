import React from 'react';
import AllServices from '../AllServices/AllServices';
import Banner from '../Banner/Banner';
import CoreService from '../CoreService/CoreService';
import Doctors from '../Doctors/Doctors';
import WelcomeNote from '../WelconeNote/WelcomeNote';
import Feedback from '../Feedback/Feedback';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WelcomeNote></WelcomeNote>
            <AllServices></AllServices>
            <CoreService></CoreService>
            <Doctors></Doctors>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;