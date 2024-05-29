// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import App from './App';


// const rootElement = document.getElementById('root');

// const router = (
//   <Routes>
//     <Route path="/" element={<App/>} />
//   </Routes>
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>{router}</Router>
//   </React.StrictMode>,
//   rootElement
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Portfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
