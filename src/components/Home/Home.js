import React from 'react';
import NavbarComponent from './NavbarComponent/NavbarComponent';
import Footer from'../Home/Footer/Footer'
import CaroSection from '../Home/CaroSection/CaroSection'
import Blogs from './Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <NavbarComponent></NavbarComponent>
            <CaroSection></CaroSection>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;