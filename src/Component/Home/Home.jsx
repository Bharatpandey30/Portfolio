import React, { useState } from 'react';
import "./Home.css";
import CustomNavbar from '../Navbar/Navbar';
import BodyTop from '../BodyTop/BodyTop';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import WorkExp from '../WorkExp/WorkExp';
import Form from '../contact form/form';
function Home() {
    return (
        <div className='homeContainer'>
           <CustomNavbar/>
           <BodyTop/>
           <Skills/>
           <Education/>
            <WorkExp/>
            <Form/>
        </div>
    );
}

export default Home;
