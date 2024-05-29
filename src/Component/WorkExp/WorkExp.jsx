import React from 'react';
import amazonLogo from '../../assets /img/amazon.jpeg';
import techxpertLogo from '../../assets /img/textpert.png';
import wrk from '../../assets /img/wrk.webp'
import './WorkExp.css';

// Define a component for each job position
const JobExperience = ({ image, title, company, location, duration, responsibilities }) => (
  <div className="job">
    <div className="j-logo">
      <img className="j-logo" src={image} alt="Company Logo" />
    </div>
    <div className="job-title">{title} at {company}, {location}</div>
    <div className="job-duration">{duration}</div>
    <div className="job-description">
      <ul>
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  </div>
);

// Main component to display all job experiences
const WorkExperience = () => {
  const jobExperiences = [
    {
      image: amazonLogo, // Use Amazon logo image
      title: 'Quality Specialist',
      company: 'Amazon',
      location: 'Bangalore',
      duration: 'August 2021 - December 2022',
      responsibilities: [
        'Recorded findings of inspection processes and collaborated with the team to implement corrective actions.',
        'Provided regular updates to team leadership on quality metrics.',
        'Conducted inspections to ensure goods conformed with customer specifications and company quality standards.',
        'Analyzed quality and performance data to support operational decision-making.',
      ],
    },
    {
      image: techxpertLogo, // Use Techxpert InfoTech logo image
      title: 'SDE',
      company: 'Techxpert InfoTech',
      location: 'Surat',
      duration: 'September 2020 - August 2021',
      responsibilities: [
        'Designed and implemented reusable components, contributing to a 25% reduction in development time.',
        'Developed a feature-rich React.js web page with multilingual support.',
        'Collaborated with cross-functional teams to integrate emerging technologies.',
        'Explored and implemented cutting-edge tools and frameworks.',
      ],
    },
    // Add more job experiences as needed
  ];

  return (
    <div className="Expcontainer">
      <div className="section-title">Work Experience</div>
      <div className="cont">
        <div className="wr">
      {jobExperiences.map((job, index) => (
        <JobExperience key={index} {...job} />
      ))}
      </div>
      <div className="wrkImg">
        <img className='wrkImg' src={wrk} alt='wrk img'/>
      </div>
      </div>
    </div>
  );
};

export default WorkExperience;
