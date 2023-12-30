import React from 'react';
import { Link } from 'react-router-dom';

import { galleriesOfImages } from '../components/helpers/ArrayOfImages';

const StreetArchitecture = () => {
  const imgOfBuilding = galleriesOfImages[35].img;

  return (
    <div>
      <div className="portraits-coolection">Architecture</div>

      <div className="wrapper-collection">
        <ul className="collection-wrapper">
          <p className="number">Location: Berlin</p>
          <p className="number">Collection: Architecture</p>
          <Link to="/gallery/streetphotography/berlin" className="link">
            <img src={imgOfBuilding} alt="pht" className="image" />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default StreetArchitecture;
