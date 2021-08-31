import React from "react";
import { Jumbotron } from "../../components";
import img from "assets/images/platform-img-2.svg";
import icon1 from "assets/images/Layer_14_copy.svg";
import icon2 from "assets/icon/icon-crypto.svg";
import icon3 from "assets/icon/icon-crypto-2.svg";

import "./FindWorkSection.scss";
import { useTranslation } from "react-i18next";

export const FindWorkSection = () => {

  const {t} = useTranslation("platform")

  return (
    <div className="find-work-section" id="find-work">
      <Jumbotron img={img}>
        <h3 className="section-title">Clearsight</h3>
        <h1 className="section-description">{t("find-work-description")}</h1>
        <p className="section-text">
         {t("find-work-text")}
        </p>
        <div className="first-icon-text">
          <img className="icon-1" src={icon1} alt="find-work" />
          <p className="icon-text">
            {t("first-icon-text")}
          </p>
        </div>
        <div className="first-icon-text">
          <img className="icon-1" src={icon2} alt="find-work"/>
          <p className="icon-text">
           {t("second-icon-text")}
          </p>
        </div>
        <div className="first-icon-text">
          <img className="icon-1" src={icon3} alt="find-work"/>
          <p className="icon-text">
            {t("third-icon-text")}
          </p>
        </div>
      </Jumbotron>
    </div>
  );
};
