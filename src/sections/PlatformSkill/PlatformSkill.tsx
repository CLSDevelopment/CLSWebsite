import { useTranslation } from "react-i18next";
import { Wave } from "../../components";
import { Tabs } from "../../components/Tabs/Tabs";
import { ListItemJob } from "../../components";
import iconOne from "../../assets/icon/laptop.svg";
import iconTwo from "../../assets/icon/icon_tab_2.svg";
import iconThree from "../../assets/icon/icon_tab_3.svg";
import iconFour from "../../assets/icon/icon_tab_4.svg";
import iconFive from "../../assets/icon/icon_tab_5.svg";
import iconSix from "../../assets/icon/icon_tab_6.svg";

import "./PlatformSkill.scss";

export const PlatformSkill = () => {
  const { t } = useTranslation("platform");

  const DevIT = [
    { job: t("devIt-job-one") },
    { job: t("devIt-job-two") },
    { job: t("devIt-job-three") },
    { job: t("devIt-job-four") },
    { job: t("devIt-job-five") },
    { job: t("devIt-job-six") },
    { job: t("devIt-job-seven") },
    { job: t("devIt-job-eight") },
  ];

  const DesignCreative = [
    { job: t("designCreative-job-one") },
    { job: t("designCreative-job-two") },
    { job: t("designCreative-job-three") },
    { job: t("designCreative-job-four") },
    { job: t("designCreative-job-five") },
    { job: t("designCreative-job-six") },
    { job: t("designCreative-job-seven") },
    { job: t("designCreative-job-eight") },
  ];

  const SalesAndMarketing = [
    { job: t("salesAndMarketing-job-one") },
    { job: t("salesAndMarketing-job-two") },
    { job: t("salesAndMarketing-job-three") },
    { job: t("salesAndMarketing-job-four") },
    { job: t("salesAndMarketing-job-five") },
    { job: t("salesAndMarketing-job-six") },
    { job: t("salesAndMarketing-job-seven") },
    { job: t("salesAndMarketing-job-eight") },
  ];

  const WritingAndTranslation = [
    { job: t("writingAndTranslation-job-one") },
    { job: t("writingAndTranslation-job-two") },
    { job: t("writingAndTranslation-job-three") },
    { job: t("writingAndTranslation-job-four") },
    { job: t("writingAndTranslation-job-five") },
    { job: t("writingAndTranslation-job-six") },
    { job: t("writingAndTranslation-job-seven") },
    { job: t("writingAndTranslation-job-eight") },
  ];

  const CustomerSupport = [
    { job: t("customerSupport-job-one") },
    { job: t("customerSupport-job-two") },
    { job: t("customerSupport-job-three") },
    { job: t("customerSupport-job-four") },
  ];

  const FinanceAccounting = [
    { job: t("financeAccounting-job-one") },
    { job: t("financeAccounting-job-two") },
    { job: t("financeAccounting-job-three") },
    { job: t("financeAccounting-job-four") },
    { job: t("financeAccounting-job-five") },
    { job: t("financeAccounting-job-six") },
    { job: t("financeAccounting-job-seven") },
    { job: t("financeAccounting-job-eight") },
  ];
  const data = [
    {
      heading: t("platform-skill-heading-one"),
      icon: iconOne,
      body: (
        <ListItemJob
          data={DevIT}
          img={"https://i.ibb.co/crLN8fb/Layer-10.png"}
        />
      ),
    },
    {
      heading: t("platform-skill-heading-two"),
      icon: iconTwo,
      body: (
        <ListItemJob
          data={DesignCreative}
          img={"https://i.ibb.co/crLN8fb/Layer-10.png"}
        />
      ),
    },
    {
      heading: t("platform-skill-heading-three"),
      icon: iconThree,
      body: (
        <ListItemJob
          data={SalesAndMarketing}
          img={"https://i.ibb.co/crLN8fb/Layer-10.png"}
        />
      ),
    },
    {
      heading: t("platform-skill-heading-four"),
      icon: iconFour,
      body: (
        <ListItemJob
          data={WritingAndTranslation}
          img={"https://i.ibb.co/crLN8fb/Layer-10.png"}
        />
      ),
    },
    {
      heading: t("platform-skill-heading-five"),
      icon: iconFive,
      body: (
        <ListItemJob
          data={CustomerSupport}
          img={"https://i.ibb.co/crLN8fb/Layer-10.png"}
        />
      ),
    },
    {
      heading: t("platform-skill-heading-six"),
      icon: iconSix,
      body: (
        <ListItemJob
          data={FinanceAccounting}
          img={"https://i.ibb.co/crLN8fb/Layer-10.png"}
        />
      ),
    },
  ];

  return (
    <>
      <Wave colorFirstWave={"#f5f9ff"} direction={"0"} />
      <section className="container-platform-skill">
        <div className="sub-container-platform-skill">
          <div className="row row-platform-skill">
            <div className="col-md-6">
              <p className="sub-title">Clearsight</p>
              <h1 className="title">{t("platform-skill-title")}</h1>
            </div>
            <div className="col-md-6">
              <p className="description">{t("platform-skill-description")}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Tabs data={data} />
            </div>
          </div>
        </div>
      </section>
      <Wave colorFirstWave={"#f5f9ff"} direction={"180"} />
    </>
  );
};
