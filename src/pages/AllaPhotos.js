import React from 'react';
import { galleriesOfImages } from '../components/helpers/ArrayOfImages';

const AllaPhotos = () => {
  return (
    <div>
      <ul className="wrapper">
        {galleriesOfImages
          .filter((el) => el.nameofmodel === 'Alla')
          .map((el) => (
            <li className="wrapper" key={el.img}>
              <img className="portraits-img" src={el.img} alt="portrait" />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AllaPhotos;
