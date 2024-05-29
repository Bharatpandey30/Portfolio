import React, { useState, useEffect } from 'react';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [clicked, setClicked] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSkillsClick = () => {

    setClicked(!clicked);
    window.scrollTo({ top: 700, behavior: 'smooth' });

  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToEducation = () => {
    window.scrollTo({ top: 1330, behavior: 'smooth' });
  };
  
  const scrolltoExp =()=> {
    window.scrollTo({top:2100, behavior:"smooth"});

  }
  const scrollToConatct = () =>{
    window.scrollTo({top:2900, behavior:"smooth"})
  }



  return (
    <div className={`navbarContainer ${scrolled ? 'scrolled' : ''}`}>
      <div className='navRight'>
      <span className='NavItem' onClick={scrollToTop}>Home</span>
        <span className='NavItem' onClick={handleSkillsClick}>Skills</span>   
        <span className='NavItem' onClick={scrollToEducation}>Education</span>
        <span className='NavItem' onClick={scrolltoExp}>Experience</span>
        <span className='NavItem' >Relavant Projects</span>
      </div>
      <div className='navleft'>
      <img src='' alt='' />
        <span className='NavItem' onClick={scrollToConatct}>Contact me</span>
        <DensitySmallIcon className='navSmall' />
      </div>
    </div>
  );
};

export default Navbar;
