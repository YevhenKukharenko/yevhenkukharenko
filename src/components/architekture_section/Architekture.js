import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import img1 from './img1.png';

const Architekture = () => {
  return (
    <div className="architekture-section">
      <h2>ARCHITECTURE</h2>
      <img src={img1} alt="architecture" className="architecture-photo" />
      <button className="btn-discover">
        <Link to="/gallery/architecture" className="link">
          Discover more
        </Link>
      </button>
    </div>
  );
};

export default Architekture;
