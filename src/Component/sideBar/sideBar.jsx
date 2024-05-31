import React from 'react';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import './sideBar.css'; // Import the CSS file for styling

const SideBar = ({ isOpen,handleClick, scrollToEducation, scrollToExperience, scrollToTop, handleSkillsClick }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <DensitySmallIcon className='navSmall' onClick={handleClick} />
      <nav>
        <ul>
          <li><a className='NavItem' onClick={scrollToTop}>Home</a></li>
          <li><a className='NavItem' onClick={handleSkillsClick}>Skills</a></li>
          <li><a className='NavItem' onClick={scrollToEducation}>Education</a></li>
          <li><a className='NavItem' onClick={scrollToExperience}>Experience</a></li>
          <li><a className='NavItem'>Relevant Projects</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
