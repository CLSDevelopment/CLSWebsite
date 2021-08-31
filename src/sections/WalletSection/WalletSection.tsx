import React from "react";
import { Wave, Jumbotron } from "../../components";
import image from "assets/images/wallet.svg";

import "./WalletSection.scss";
import { useTranslation } from "react-i18next";

export const WalletSection = () => {

  const {t} = useTranslation("home")

  return (
    <>
      <Wave colorFirstWave={"#f5f9ff"} direction={"0"} />
      <div className="wallet-section">
        <Jumbotron img={image}>
          <h3 className="section-title">{t("wallet-title")}</h3>
          <h1 className="section-description">{t("wallet-description")}</h1>
          <p className="section-text">{t("wallet-text")}</p>
         <a href="/wallet" className="section-btn"> <button className="section-button">{t("wallet-btn")}</button> </a>
        </Jumbotron>
      </div>
      <Wave
        colorFirstWave={"#cbdefd"}
        colorSecoundWave={"#f5f9ff"}
        direction={"180"}
      />
    </>
  );
};
