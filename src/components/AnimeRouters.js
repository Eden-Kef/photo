import React from "react";
//import pages
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";   
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from '../pages/Contact';
import SinglePost from "../pages/SinglePost";
import Blog from '../pages/Blog';
//import routes route & useLocation hook
import {Routes, Route, useLocation} from 'react-router-dom'; 


const AnimeRoutes = () => {
    const location = useLocation();
    
    return ( 
    <AnimatePresence initial ={true} mode='wait'>
    <Routes key = {location.pathname} location={location}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/blog/:slug" element={<SinglePost />}/>
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} /> 
    </Routes>
    </AnimatePresence>
    );
};
export default AnimeRoutes;