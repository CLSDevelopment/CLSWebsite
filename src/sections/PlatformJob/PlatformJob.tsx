import React from "react";
import { TabsForJobs } from "../../components/TabsForJobs/TabsForJobs";
import arrowIcon from "../../assets/icon/arrow-platform-icon.svg";
import "./PlatfromJob.scss";
import { Wave } from "../../components";
import { SkilsComponent } from "../../components/SkilsComponent/SkilsComponent";
import { useTranslation } from "react-i18next";

export const PlatformJob = () => {

  const {t} = useTranslation("platform")

  const listOfJobs = [
    { job: "Data Entry Specialists" },
    { job: "Video Editors" },
    { job: "Data Analyst" },
    { job: "Shopify Developer" },
    { job: "Ruby on Rails Developer" },
    { job: "Android Developer" },
    { job: "Bookkeeper" },
    { job: "Content Writer" },
    { job: "Data Analyst" },
    { job: "Copywriter" },
    { job: "Database Administrator" },
    { job: "Data Scientist" },
    { job: "Front-End Developer" },
    { job: "Game Developer" },
    { job: "Graphic Designer" },
    { job: "iOS Developer" },
    { job: "Java Developer" },
    { job: "  JavaScript Developer" },
    { job: "Logo Designer" },
    { job: "Mobile App Developer" },
    { job: "PHP Developer" },
    { job: "Resume Writer" },
    { job: "SEO Expert" },
    { job: "Social Media Manager" },
    { job: "Python Developer" },
  ];

  const data = [
    {
      body: <SkilsComponent listOfJobs={listOfJobs} />,
    },
  ];

  return (
    <>
      <div className="conainer-platform-jobs">
      <h1 className="title-jobs">{t("platform-job-title")}</h1>
        <TabsForJobs data={data} />
        </div>
   
      <Wave
        colorFirstWave="#cbdefd"
        colorSecoundWave={"#f5f9ff"}
        direction="180"
      /> 
    </>
  );
};
