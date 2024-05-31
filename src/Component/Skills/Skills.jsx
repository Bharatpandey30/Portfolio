import React, { useState, useEffect } from 'react';
import './Skills.css';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import meter1 from '../../assets /img/frontend.webp';
import meter2 from '../../assets /img/fullstack.png';
import meter3 from '../../assets /img/webdev.webp';
import mern from '../../assets /img/mern.png';
import data from '../../assets /img/dataan.jpeg';
import sql from '../../assets /img/sql.avif';
import python from '../../assets /img/python.webp';
import manymore from '../../assets /img/manymore.png';

function Skills() {
  const [slidePosition, setSlidePosition] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize(); // Check screen size on initial render
    window.addEventListener('resize', handleResize); // Listen for resize events
    return () => window.removeEventListener('resize', handleResize); // Clean up listener
  }, []);

  const handleRightClick = () => {
    setSlidePosition((prevPosition) => (prevPosition + 1) % 8);
  };

  const handleLeftClick = () => {
    setSlidePosition((prevPosition) => (prevPosition - 1 + 8) % 8);
  };

  const handleClick = () => {
    window.open('/resume.pdf', 'blank');
  };

  const images = [
    { src: meter1, text: 'Front End Development' },
    { src: meter2, text: 'Full Stack Development' },
    { src: meter3, text: 'Web Development' },
    { src: mern, text: 'Mern Stack' },
    { src: data, text: 'Data Analyst' },
    { src: sql, text: 'SQL' },
    { src: python, text: 'Python' },
    { src: manymore, text: 'Click here ☝️', onClick: handleClick }
  ];

  return (
    <div className='skillsContainer'>
      <div className='text'>Skills</div>
      <div className='img'>
        <KeyboardDoubleArrowLeftIcon
          onClick={handleLeftClick}
          className={`leftArrow ${slidePosition > 0 ? 'swipeRight' : 'swipeLeft'}` }   style={{ fontSize: '3em' }}
        />
        <div className='imgWrapper'>
          {images.map((image, index) => (
            <div key={index} className='imgBlock' style={{ transform: `translateX(-${slidePosition * 100}%)` }}>
              <img className='Img1' src={image.src} alt='Skill' onClick={image.onClick || null} />
              <span className='imgtext'>{image.text}</span>
            </div>
          ))}
        </div>
        <KeyboardDoubleArrowRightIcon
          onClick={handleRightClick}
          className={`rightArrow ${slidePosition < images.length - 1 ? 'swipeRight' : 'swipeLeft'}`}
          style={{ fontSize: '3em' }} />
      </div>
      {isSmallScreen && (
        <div className='shortScreen'>
          <ul className='skillsList'>
            {images.map((image, index) => (
              <li key={index} onClick={image.onClick || null}>{image.text}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Skills;
