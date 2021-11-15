import { useTranslation } from "react-i18next";
import imgCrypto from "assets/images/crypto-expo.jpg"

import "./InfoContentSection.scss";

export const InfoContentSection = () => {
  const { t } = useTranslation("information");

  return (
    <section className="contianer-info-content">
      <h1 className="section-description">{t("info-content-description")}</h1>
      <p className="section-text">{t("info-content-text-about-us")}</p>
      
      <div className="row solutions">
        <div className="col-md-6 left-side">
          <h3 className="solutions-title">{t("solution-freelancer")}</h3>
          <ul className="solutions-text">
            <li>{t("solution-text-freelancer-first")}</li>
            <li>{t("solution-text-freelancer-second")}</li>
            <li>{t("solution-text-freelancer-third")}</li>
            <li>{t("solution-text-freelancer-fourth")}</li>
            <li>{t("solution-text-freelancer-five")}</li>
          </ul>
        </div>
        <div className="col-md-6 right-side">
          <h3 className="solutions-title">{t("solution-employer")}</h3>
          <ul className="solutions-text">
            <li>{t("solution-text-employer-five")}</li>
            <li>{t("solution-text-employer-second")}</li>
            <li>{t("solution-text-employer-third")}</li>
            <li>{t("solution-text-employer-fourth")}</li>
            <li>{t("solution-text-employer-five")}</li>
            <li>{t("solution-text-employer-six")}</li>
          </ul>
        </div>
    
      </div>
    </section>
  );
};
