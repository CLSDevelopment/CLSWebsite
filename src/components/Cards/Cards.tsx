import logo from "../../assets/images/iStock-1008450996.svg";
import logo1 from "../../assets/images/card-img-2.svg";
import logo2 from "../../assets/images/iStock-1084096262.svg";

import "./Cards.scss";

import { useTranslation } from "react-i18next";

export const Cards = () => {
  const { t } = useTranslation("platform");

  return (
    <div className="row container--card">
      <div className="col-sm-12 col-md-6 col-xl-4 card--content">
        <div className="card--header">
          <img className="card--image" src={logo} alt="first_image" />
        </div>
        <div className="card--body">
          <h1 className="card--title">{t("card-platform-title-first")}</h1>
          <p className="card--text">{t("card-platform-description-first")}</p>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-xl-4 card--content">
        <div className="card--header">
          <img className="card--image" src={logo1} alt="second_image" />
        </div>
        <div className="card--body">
          <h1 className="card--title">{t("card-platform-title-second")}</h1>
          <p className="card--text">{t("card-platform-description-second")}</p>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-xl-4 card--content">
        <div className="card--header">
          <img className="card--image" src={logo2} alt="third_image" />
        </div>
        <div className="card--body">
          <h1 className="card--title">{t("card-platform-title-third")}</h1>
          <p className="card--text">{t("card-platform-description-third")}</p>
        </div>
      </div>
    </div>
  );
};
