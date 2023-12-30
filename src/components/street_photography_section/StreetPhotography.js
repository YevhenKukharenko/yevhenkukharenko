import './style.css';

import { Link } from 'react-router-dom';

import Street_1 from './Street_1.png';
import Street_2 from './Street_2.png';
import Street_3 from './Street_3.png';

import React from 'react';

const StreetPhotography = () => {
  return (
    <div className="portrait-section">
      <h2>STREET PHOTOGRAPHY</h2>
      <ul className="container">
        <li>
          <img src={Street_2} alt="portrait" className="street-photo" />
        </li>
        <li>
          <img src={Street_3} alt="portrait" className="street-photo" />
        </li>
        <li>
          <img src={Street_1} alt="portrait" className="street-photo" />
        </li>
      </ul>
      <button className="btn-discover">
        <Link to="/gallery/streetphotography" className="link">
          Discover more
        </Link>
      </button>
    </div>
  );
};

export default StreetPhotography;
