import React from 'react';
import Navbar from '../../SharedComponents/Navbar/Navbar'
import TopNav from "../../SharedComponents/TopNav/TopNav";
import Header from '../Header/Header';
import HomeAbout from '../HomeAbout/HomeAbout';
import BlogPost from '../BlogPost/Blog/Blog';
import Footer from '../../SharedComponents/Footer/Footer';

const Home = () => {
    return (
        <>
            <TopNav />
            <Navbar />
           <Header /> 
           <HomeAbout />
           <BlogPost />
           <Footer />
        </>
    );
};

export default Home;