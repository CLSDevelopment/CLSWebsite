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
    { img: as, href: "https://www.asahi.com/and/pressrelease/407757936/" },
    {
      img: marketWatch,
      href: "https://www.marketwatch.com/press-release/clearsight-announces-release-of-new-job-platform-based-on-cryptocurrency-2021-08-12",
    },
    {
      img: einPress,
      href: "https://www.einnews.com/pr_news/548701382/clearsight-announces-release-of-new-job-platform-based-on-cryptocurrency",
    },
    {
      img: insider,
      href: "https://markets.businessinsider.com/news/stocks/clearsight-announces-release-of-new-job-platform-based-on-cryptocurrency-1030725045",
    },
  ];
  return (
    <section className="continaer-partner-section">
      <h1 className="slider-desctiprion">{t("marketing-associates-title")}</h1>
      <SliderComponent data={data} />
    </section>
  );
};
