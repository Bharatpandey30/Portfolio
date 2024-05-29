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
import manymore from '../../assets /img/manymore.png'

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
    const newPosition = slidePosition + 1;
    if (newPosition < 6) {
      setSlidePosition(newPosition);
    } else {
      setSlidePosition(0);
    }
  };

  const handleClick = () => {
    window.open('/resume.pdf', 'blank');
  };

  const handleLeftClick = () => {
    const newPosition = slidePosition - 1;
    setSlidePosition(newPosition);
    if (newPosition > -6) {
      setSlidePosition(newPosition);
    } else {
      setSlidePosition(0);
    }
  };

  return (
    <div className='skillsContainer'>
      <div className='text'>Skills</div>
      <div className='img'>
        <KeyboardDoubleArrowLeftIcon
          onClick={handleLeftClick}
          className={`leftArrow ${slidePosition > 0 ? 'swipeRight' : 'swipeLeft'}`}
          style={{ fontSize: '4em' }}
        />
        <div className='imgWrapper' >
          <div className='imgBlock'>
            <img className='Img1' style={{ transform: `translateX(-${slidePosition * 150}%)` }} src={meter1} alt='Image' />
            <span className='imgtext' style={{ transform: `translateX(-${slidePosition * 150}%)` }}>Front End Development</span>
          </div>
          <div className='imgBlock'>
            <img className='Img1' style={{ transform: `translateX(-${slidePosition * 150}%)` }} src={meter2} alt='Image' />
            <span className='imgtext' style={{ transform: `translateX(-${slidePosition * 150}%)` }}>Full stack Development</span>
          </div>
          <div className='imgBlock'>
            <img className='Img1'style={{ transform: `translateX(-${slidePosition * 150}%)` }} src={meter3} alt='Image' />
            <span  className='imgtext' style={{ transform: `translateX(-${slidePosition * 150}%)` }}> Web Development</span>
          </div>
          <div className='imgBlock'>
            <img className='Img1'style={{ transform: `translateX(-${slidePosition * 150}%)` }} src={mern} alt='Image' />
            <span className='imgtext' style={{ transform: `translateX(-${slidePosition * 150}%)` }}> Mern Stack</span>
          </div>
          <div className='imgBlock'>
            <img className='Img1'style={{ transform: `translateX(-${slidePosition * 150}%)` }} src={data} alt='Image' />
            <span className='imgtext' style={{ transform: `translateX(-${slidePosition * 150}%)` }}>Data analyst</span>
          </div>
          <div className='imgBlock'>
            <img className='Img1'style={{ transform: `translateX(-${slidePosition * 150}%)` }} src={sql} alt='Image' />
            <span className='imgtext' style={{ transform: `translateX(-${slidePosition * 150}%)` }}> SQL</span>
          </div>
          <div className='imgBlock'>
            <img className='Img1'style={{ transform: `translateX(-${slidePosition * 150}%)` }} src={python} alt='Image' />
            <span className='imgtext' style={{ transform: `translateX(-${slidePosition * 150}%)` }}> Python</span>
          </div>
          <div className='imgBlock'>
            <img className='Img1'style={{ transform: `translateX(-${slidePosition * 150}%)` }} onClick={handleClick} src={manymore} alt='Image' />
            <span className='imgtext' style={{ transform: `translateX(-${slidePosition * 150}%)` }}> click here ☝️</span>
          </div>
        </div>
        <KeyboardDoubleArrowRightIcon
          onClick={handleRightClick}
          className={`rightArrow ${slidePosition < 2 ? 'swipeRight' : 'swipeLeft'}`}
          style={{ fontSize: '4em' }}
        />
      </div>
      

    {isSmallScreen && (
        <div className='shortScreen'>
          <ul className='skillsList'>
            <li>Front End Development</li>
            <li>Full Stack Development</li>
            <li>Web Development</li>
            <li>Mern Stack</li>
            <li>Data Analyst</li>
            <li>SQL</li>
            <li>Python</li>
          </ul>
        </div>
    )}
    </div>
   
  );
}

export default Skills;
