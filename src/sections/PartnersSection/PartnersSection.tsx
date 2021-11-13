import { useTranslation } from "react-i18next";
import { SliderComponent } from "../../components";
import bloomberg from "assets/icon/bloomberg-media4038.jpeg";
import yahoo from "assets/icon/yahoo.svg";
import insider from "assets/icon/Insider-Logo.png";
import as from "assets/icon/as.png";
import marketWatch from "assets/icon/marketwatch-vector-logo.png";
import einPress from "assets/icon/einnewsdesk.png";

import "./PartnersSection.scss";

export const PartnersSection = () => {
  const { t } = useTranslation("home");
  const data = [
    {
      img: bloomberg,
      href: "https://www.bloomberg.com/press-releases/2021-08-12/clearsight-announces-release-of-new-job-platform-based-on-cryptocurrency",
    },
    {
      img: yahoo,
      href: "https://finance.yahoo.com/news/clearsight-announces-release-job-platform-145900517.html",
    },
    {
      img: insider,
      href: "https://markets.businessinsider.com/news/stocks/clearsight-announces-release-of-new-job-platform-based-on-cryptocurrency-1030725045",
    },
  ];
  return (
    <section className="continaer-partner-section">
      <h1 className="slider-desctiprion">{t("marketing-associates-title")}</h1>
      <SliderComponent data={data}/>
    </section>
  );
};
