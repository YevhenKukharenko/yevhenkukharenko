import React from 'react';
import { Link } from 'react-router-dom';

import { galleriesOfImages } from '../../components/helpers/ArrayOfImages';

const Architecture = () => {
  const imgOfBuilding = galleriesOfImages[22].img;

  return (
    <div>
      <div className="portraits-coolection">Architecture</div>

      <div className="wrapper-collection">
        <ul className="collection-wrapper">
          <p className="number">Location: Berlin</p>
          <p className="number">Collection: Architecture</p>
          <Link to="/gallery/architecture/city-berlin" className="link">
            <img src={imgOfBuilding} alt="pht" className="image" />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Architecture;
