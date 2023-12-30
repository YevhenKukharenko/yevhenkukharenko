import React from 'react';
import { Link } from 'react-router-dom';

import { galleriesOfImages } from '../../components/helpers/ArrayOfImages';

const Portraits = () => {
  const imgOfModel = galleriesOfImages[0].img;
  const imgOfModel2 = galleriesOfImages[7].img;
  const imgOfModel3 = galleriesOfImages[12].img;

  return (
    <div>
      <div className="portraits-coolection">Portraits</div>

      <div className="wrapper-collection">
        <ul className="collection-wrapper">
          <p className="number">Location: Berlin</p>
          <p className="number">Collection: Portraits</p>
          <Link to="/gallery/portraits/erfan" className="link">
            <img src={imgOfModel} alt="pht" className="image" />
          </Link>
        </ul>
        <ul className="collection-wrapper">
          <p className="number">Location: Berlin</p>
          <p className="number">Collection: Portraits</p>

          <Link to="/gallery/portraits/alla" className="link">
            <img src={imgOfModel2} alt="pht" className="image" />
          </Link>
        </ul>
        <ul className="collection-wrapper">
          <p className="number">Location: Berlin</p>
          <p className="number">Collection: Portraits</p>

          <Link to="/gallery/portraits/kristina" className="link">
            <img src={imgOfModel3} alt="pht" className="image" />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Portraits;
