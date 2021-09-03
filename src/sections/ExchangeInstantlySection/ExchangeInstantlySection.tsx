import { useTranslation } from "react-i18next";
import { Jumbotron } from "../../components";

import "./ExchangeInstantlySection.scss";

import imageSection from "../../assets/images/exchange-instantly.svg";


export const ExchangeInstantlySection = () => {
  const { t } = useTranslation("wallet");

  return (
    <div className="exchang-instantly-section">
      <Jumbotron img={imageSection}>
        <h3 className="section-title">Clearsight</h3>
        <h1 className="section-description">
          {t("exchange-instantly-description")}
        </h1>
        <p className="section-text">{t("exchange-instantly-text")}</p>
      </Jumbotron>
    </div>
  );
};
