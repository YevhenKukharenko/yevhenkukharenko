import React from 'react';
import { galleriesOfImages } from '../components/helpers/ArrayOfImages';

const ArchitecturePhotos = () => {
  return (
    <div>
      <ul className="wrapper-architecture-flex">
        {galleriesOfImages
          .filter((el) => el.collectionname === 'architecture')
          .map((el) => (
            <li className="wrapper-architecture" key={el.img}>
              <img
                className="portraits-img-architecture"
                src={el.img}
                alt="portrait"
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ArchitecturePhotos;
