import { useTranslation } from "react-i18next";
import { Jumbotron } from "../../components";
import image from "assets/images/platform-img.svg";

import "./PlatformSection.scss";

export const PlatformSection = () => {
  const { t } = useTranslation("home");

  return (
    <section className="platform-section">
      <Jumbotron img={image}>
        <h3 className="section-title">{t("platform-title")}</h3>
        <h1 className="section-description">{t("platform-description")}</h1>
        <p className="section-text">{t("platform-text")}</p>
        <a href="/platform" className="section-btn">
          <button className="section--button">{t("platform-btn")}</button>
        </a>
      </Jumbotron>
    </section>
  );
};
