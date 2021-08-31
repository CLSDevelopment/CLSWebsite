import React from "react";
import image from "assets/images/card-with-bg-green.svg";
import image2 from "assets/images/card-with-bg-wallet.svg";
import image3 from "assets/images/card-with-bg-purple.svg"

import "./CardsWithBackground.scss";

export const CardWithBackground = () => {
  return (    
    <div className="row container-card-background">
      <div className="col-sm-12 col-md-6 col-xl-4 card--container">
        <img src={image} alt="first-image"/>
        <div className="card--content">
          <p className="card--name">Mark Wood Journal</p>
          <h4 className="card--text">
            It is a long established fact that a reader will be distracted.
          </h4>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-xl-4 card--container">
        <img src={image2} alt="second-image"/>
        <div className="card--content">
          <p className="card--name">Mark Wood Journal</p>
          <h4 className="card--text">
            It is a long established fact that a reader will be distracted.
          </h4>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-xl-4 card--container">
        <img src={image3} alt="third-image"/>
        <div className="card--content">
          <p className="card--name">Mark Wood Journal</p>
          <h4 className="card--text">
            It is a long established fact that a reader will be distracted.
          </h4>
        </div>
      </div>
      
    </div>
  );
};
