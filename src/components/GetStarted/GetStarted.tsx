import React from "react";
import icon2 from "assets/icon/hr.svg";
import icon3 from "assets/icon/credit-card-get-started.svg";
import icon4 from "assets/icon/application-download.svg";
import iconArrowUp from "assets/icon/arrow-icon.svg";
import iconArrowDown from "assets/icon/arrow-icon-down.svg";
import iconLeftDown from "assets/icon/icon-left-down.svg";
import iconRightDown from "assets/icon/icon-right-down.svg";

import "./GetStarted.scss";
import { Wave } from "../Wave/Wave";
import { useTranslation } from "react-i18next";

type GetStartedProps = {
  firstCard?: any;
  secondCard?: any;
  thirdCard?: any;
  icon?: any;
  id?: any;
};

export const GetStarted: React.FC<GetStartedProps> = ({
  firstCard = [],
  secondCard = [],
  thirdCard = [],
  icon,
  id,
}) => {

  const {t} = useTranslation("wallet")

  return (
    <>
      <Wave colorFirstWave={"#f5f9ff"} direction={"0"} />
      <div className="get-started" id={id}>
        <div className="gs-section" id="get-started">
          <h1 className="gs-section-title">CLEARSIGHT</h1>
          <p className="gs-section-description">
           {t("gs-section-description")}
          </p>
        </div>
        <div className="row get-started-contianer">
          <div className="col-sm-12 col-md-6 col-xl-3 card-gs">
            <div className="card-gs-header">
              <img src={icon4} className="icon" alt="first-icon" />
              <h1 className="card-badge">01</h1>
            </div>

            {(firstCard || []).map((item, index) => (
              <div className="card-gs-body" key={index}>
                <h1 className="title">{item.title}</h1>
                <p className="description">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="col-xl-1 first-arrow ">
            <img src={iconArrowUp} alt="icon-arrow" className="arrow-up" />
            <img
              src={iconRightDown}
              alt="arrow-right"
              className="arrow-right"
            />
          </div>

          <div className="col-sm-12 col-md-6 col-xl-3 card-gs">
            <div className="card-gs-header">
              <img src={icon3} className="icon" alt="second-icon" />
              <h1 className="card-badge">02</h1>
            </div>

            {secondCard.map((item, index) => (
              <div className="card-gs-body" key={index}>
                <h1 className="title">{item.title}</h1>
                <p className="description">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="col-xl-1 second-arrow">
            <img src={iconArrowDown} alt="" className="arrow-down" />
            <img src={iconLeftDown} alt="" className="arrow-left" />
          </div>

          <div className="col-sm-12 col-md-6 col-xl-3 card-gs">
            <div className="card-gs-header">
              {icon ? (
                <img src={icon} className="icon" alt="third-icon" />
              ) : (
                <img src={icon2} className="icon" alt="third-icon" />
              )}

              <h1 className="card-badge">03</h1>
            </div>

            {(thirdCard || []).map((item, index) => (
              <div className="card-gs-body" key={index}>
                <h1 className="title">{item.title}</h1>
                <p className="description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Wave colorFirstWave={"#f5f9ff"} direction={"180"} />
    </>
  );
};
