import React from 'react';
import './Education.css';
import graduationImage from '../../assets /img/contact-img.svg'; // Import your graduation image

const Education = () => {
  return (
    <div className='educationContainer'>
     <img src={graduationImage} alt='Graduation' className='educationImage' />
      <h1>Education</h1>
      <div className='educationItem'>
      <div className='educationContent'>
          <h2>Graduate Certificate - Mobile Solutions Development (MSD)</h2>
          <p><strong>Conestoga College, Waterloo, Ontario</strong></p>
          <p><em>Jan 2023 – April 2024</em></p>
          <p>Courses: Mobile App Development, Full-Stack Web Development,SQL, Database Cloud Computing, Agile Development</p>
        </div>
     <div className='educationContent2'>
          <h2>Bachelor of Engineering - Electronics and Communication Engineering</h2>
          <p><strong>C K Pithawala College of Engineering and Technology, Surat, Gujarat</strong></p>
          <p><em>July 2016- August 2020</em></p>
          <p>Courses: Data Structures, Algorithm Analysis, Operating Systems</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
