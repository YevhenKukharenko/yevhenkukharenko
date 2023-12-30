import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <div className="container-flex-columns">
      <div className="portraits-coolection">
        <Link to="/gallery/portraits" className="link">
          Portraits
        </Link>
      </div>
      <div className="architecture-coolection">
        <Link to="/gallery/architecture" className="link">
          Architecture
        </Link>
      </div>
      <div className="street-coolection">
        <Link to="/gallery/streetphotography" className="link">
          Street photography
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
