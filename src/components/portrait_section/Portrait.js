import './style.css';
import { Link } from 'react-router-dom';

import Alla_1 from './Alla_1.png';
import Alla_2 from './Alla_2.png';
import Alla_3 from './Alla_3.png';

import React from 'react';

const Portrait = () => {
  return (
    <div className="portrait-section">
      <h2>PORTRAITS</h2>
      <ul className="container">
        <li>
          <img src={Alla_1} alt="portrait" className="portrait-photo" />
        </li>
        <li>
          <img src={Alla_2} alt="portrait" className="portrait-photo" />
        </li>
        <li>
          <img src={Alla_3} alt="portrait" className="portrait-photo" />
        </li>
      </ul>
      <button className="btn-discover">
        <Link to="/gallery/portraits" className="link">
          Discover more
        </Link>
      </button>
    </div>
  );
};

export default Portrait;
