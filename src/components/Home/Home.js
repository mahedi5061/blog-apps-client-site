import React from 'react';
import NavbarComponent from './NavbarComponent/NavbarComponent';
import Footer from'../Home/Footer/Footer'
import CaroSection from '../Home/CaroSection/CaroSection'
// import Blogs from './Blogs/Blogs';
import LatestBlogs from './LatestBlogs/LatestBlogs';

const Home = () => {
    return (
        <>
            <NavbarComponent></NavbarComponent>
            <CaroSection></CaroSection>
            <LatestBlogs></LatestBlogs>
            {/* <Blogs></Blogs> */}
            <Footer></Footer>
        </>
    );
};

export default Home;