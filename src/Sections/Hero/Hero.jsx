import React from 'react';
import styles from "./Hero.module.css"
import proPic from "../../assets /img/hero-img.png"; 
import gt from "../../assets /img/gt.png"; 
import link from "../../assets /img/link.png"; 
import az from "../../assets /img/az.jpeg"; 
import x from "../../assets /img/x.png"; 
import insts from "../../assets /img/ins.jpeg"; 
import CV from "../../assets /img/resume.pdf"
import { useTheme } from '../../common/ThemeContext';


function Hero() {
    const{theme,toggleTheme} = useTheme();

  return (
     <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className = {styles.hero} src={proPic} alt="My Profile Picture" /> 
        {/* <img className = {styles.colorMode}  alt="My Profile Picture" />  */}
      </div>
      <div className={styles.info}>
        <h1> Bharat 
            <br/>
            Pandey
        </h1>
        <h2> Full Stack Developer</h2>
        <span> 
            <a href='https://github.com/Bharatpandey30' target='_blank'>
            <img src={gt} alt="GitHub" />
            </a>
            <a href='https://www.linkedin.com/in/bharatpandey94/' target='_blank'>
            <img src={link} alt="LinkedIn" />
            </a>
            <a href='https://www.instagram.com/bharatpandey94' target='_blank'>
            <img  src={insts} alt="Instagram" />
            </a>
            <a href='https://twitter.com/bharatpandey94' target='_blank'>
            <img src={x} alt="Twitter" />
            </a>
            <a href='https://dev.azure.com/Bpandey8352/' target='_blank'>
            <img  src={az} alt="Azure" />
            </a>
        </span>
        <p>
            Seeking a challenging role as a Full-Stack Developer to leverage my expertise in web development, software engineering, and problem-solving skills. Passionate about creating efficient and scalable solutions to contribute effectively to project success.
        </p>
        <a href={CV} download>  
            <button className='hover'>
                Resume
            </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
