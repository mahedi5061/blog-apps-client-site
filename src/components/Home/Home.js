import React from 'react';
import NavbarComponent from './NavbarComponent/NavbarComponent';
 
import CaroSection from '../Home/CaroSection/CaroSection'
import Blogs from './Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <NavbarComponent></NavbarComponent>
            <CaroSection></CaroSection>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;