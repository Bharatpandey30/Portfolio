// import React from 'react';
// import './BodyTop.css'; // Assuming your CSS file is correctly imported
// import topImage from '../../assets /img/banner2.jpeg';
// import ast from '../../assets /img/react-2.svg';
// import M from '../../assets /img/arrow1.svg'
// import E from '../../assets /img/arrow2.svg'
// import N from '../../assets /img/N.svg'
// function BodyTop() {
//     const containerStyle = {
//       height: '1200px',
//       width: '100%',
//       display: 'flex',
//       backgroundImage: `url(${topImage})`,
//       backgroundSize: 'cover',
//       backgroundRepeat: 'no-repeat',
//     };
  
//     return (
//       <div className='BodyTopContainer' style={containerStyle} >
//         <div className='greeting'>
//           <h2>Welcome Everyone</h2>
//           <h1>Hello, I'm Bharat Pandey, <span className="remaining-text">a Full Stack Developer.</span></h1>
//           <p>
//             Seeking a challenging role as a Full-Stack Developer to leverage my expertise in web development, software engineering, and problem-solving skills. Passionate about creating efficient and scalable solutions to contribute effectively to project success.
//           </p>
//         </div>
//         <div className="imgcont">
//           <img className="immg" src= {M} alt='img'/> 
//           <img className="immg" src= {E} alt='img'/> 
//           <img className="ast" src={ast} alt="AST Logo" />
//           <img className="immg" src= {N} alt='img'/> 
//         </div>
//       </div>
//     );
//   }
  
//   export default BodyTop;

import React from 'react';
import './BodyTop.css'; // Assuming your CSS file is correctly imported
// import topImage from '../../assets/img/banner2.jpeg';
import ast from '../../assets /img/react-2.svg';
import M from '../../assets /img/arrow1.svg';
import E from '../../assets /img/arrow2.svg';
import N from '../../assets /img/N.svg';

function BodyTop() {
  return (
    <div className="BodyTopContainer">
      <div className="greeting">
        <h2>Welcome Everyone</h2>
        <h1>
          Hello, I'm Bharat Pandey, <span className="remaining-text">a Full Stack Developer.</span>
        </h1>
        <p>
          Seeking a challenging role as a Full-Stack Developer to leverage my expertise in web development, software engineering, and problem-solving skills. Passionate about creating efficient and scalable solutions to contribute effectively to project success.
        </p>
      </div>
      <div className="imgcont">
        <img className="immg" src={M} alt="img" />
        <img className="immg" src={E} alt="img" />
        <img className="ast" src={ast} alt="AST Logo" />
        <img className="immg" src={N} alt="img" />
      </div>
    </div>
  );
}

export default BodyTop;
