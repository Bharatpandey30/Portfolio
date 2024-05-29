import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';


const rootElement = document.getElementById('root');

const router = (
  <Routes>
    <Route path="/" element={<App />} />
  </Routes>
);

ReactDOM.render(
  <React.StrictMode>
    <Router>{router}</Router>
  </React.StrictMode>,
  rootElement
);
