import { useTranslation } from "react-i18next";
import { Jumbotron, Wave } from "../../components";
import image from "../../assets/images/buy-crypto.png";

import "./BuyCryptoSection.scss";

export const BuyCryptoSection = () => {
  const { t } = useTranslation("wallet");

  return (
    <>
      <Wave colorFirstWave={"#f5f9ff"} direction={"0"} />
      <div className="buy-crypto-section">
        <Jumbotron img={image}>
          <h3 className="section-title">Clearsight</h3>
          <h1 className="section-description">{t("buy-crypto-description")}</h1>
          <p className="section-text">{t("buy-crypto-text")}</p>
          <a href="#get-started" className="section-btn">
            <button className="section-button">{t("buy-crypto-btn")}</button>
          </a>
        </Jumbotron>
      </div>
      <Wave colorFirstWave={"#f5f9ff"} direction={"180"} />
    </>
  );
};
