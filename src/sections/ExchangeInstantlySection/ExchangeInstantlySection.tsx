import React from "react";
import { Jumbotron } from "../../components";

import "./ExchangeInstantlySection.scss";

import image from "../../assets/images/exchange-instantly.svg";
import { useTranslation } from "react-i18next";

export const ExchangeInstantlySection = () => {

  const {t} = useTranslation("wallet")

  return (
    <div className="exchang-instantly-section">
      <Jumbotron img={image}>
        <h3 className="section-title">Clearsight</h3>
        <h1 className="section-description">{t("exchange-instantly-description")}</h1>
        <p className="section-text">
          {t("exchange-instantly-text")}
        </p>
      </Jumbotron>
    </div>
  );
};
