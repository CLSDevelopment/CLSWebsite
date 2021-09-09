import { useTranslation } from "react-i18next";
import { Wave, Jumbotron } from "../../components";
import image from "assets/images/wallet.svg";

import "./WalletSection.scss";

export const WalletSection = () => {
  const { t } = useTranslation("home");
  const isArabic = localStorage.getItem("language") === "AE";
  const jumbotromTitleArabic = [
    "section-title",
    isArabic && "section-title-arabic",
  ];

  return (
    <>
      <Wave colorFirstWave={"#f5f9ff"} direction={"0"} />
      <div className="wallet-section">
        <Jumbotron img={image} sideComponent={true} left={'right'} right={'left'}>
          <h3 className={jumbotromTitleArabic.join(" ")}>
            {t("wallet-title")}
          </h3>
          <h1 className="section-description">{t("wallet-description")}</h1>
          <p className="section-text">{t("wallet-text")}</p>
          <a href="/wallet" className="section-btn">
            <button className="section-button">{t("wallet-btn")}</button>{" "}
          </a>
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
