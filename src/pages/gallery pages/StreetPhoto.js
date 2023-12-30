import React from 'react';
import { Link } from 'react-router-dom';

import { galleriesOfImages } from '../../components/helpers/ArrayOfImages';

const StreetPhoto = () => {
  const imgOfPeople = galleriesOfImages[35].img;

  return (
    <div>
      <div className="portraits-coolection">Street Photography</div>

      <div className="wrapper-collection">
        <ul className="collection-wrapper">
          <p className="number">Location: Berlin</p>
          <p className="number">Collection: Street Photography</p>
          <Link to="/gallery/streetphotography/berlin" className="link">
            <img src={imgOfPeople} alt="pht" className="image" />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default StreetPhoto;
