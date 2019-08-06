import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box, picIsShown }) => {
  if (picIsShown) {
    return (
      <div className="center ma">
        <div className="absolute mt2">
          <img
            id="inputimage"
            src={imageUrl}
            alt="recognized pics "
            width="500px"
            height="auto"
          />
          <div
            className="bounding-box"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol
            }}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default FaceRecognition;
