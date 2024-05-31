import React, { useState, useEffect } from 'react';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import SideBar from '../sideBar/sideBar.jsx';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleClick = () => {
    console.log('Sidebar state before toggle:', sidebarOpen); // Add this line
    setSidebarOpen(!sidebarOpen);
    console.log('Sidebar state after toggle:', !sidebarOpen); // Add this line
  }
  

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
    window.scrollTo({ top: 700, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToEducation = () => {
    window.scrollTo({ top: 1330, behavior: 'smooth' });
  };

  const scrollToExperience = () => {
    window.scrollTo({ top: 2100, behavior: 'smooth' });
  }

  const scrollToContact = () => {
    window.scrollTo({ top: 2900, behavior: 'smooth' });
  }

  return (
    <div className={`navbarContainer ${scrolled ? 'scrolled' : ''}`}>
      <div className='navRight'>
        <span className='NavItem' onClick={scrollToTop}>Home</span>
        <span className='NavItem' onClick={handleSkillsClick}>Skills</span>   
        <span className='NavItem' onClick={scrollToEducation}>Education</span>
        <span className='NavItem' onClick={scrollToExperience}>Experience</span>
        <span className='NavItem'>Relevant Projects</span>
      </div>
      <div className='navLeft'>
        <span className='NavItem' onClick={scrollToContact}>Contact me</span>
        <DensitySmallIcon className='navSmall' onClick={handleClick} />
        <SideBar 
          handleClick={handleClick}
          isOpen={sidebarOpen} 
          scrollToEducation={scrollToEducation}
          scrollToExperience={scrollToExperience}
          scrollToTop={scrollToTop}
          handleSkillsClick={handleSkillsClick}
        />
      </div>
    </div>
  );
};

export default Navbar;
