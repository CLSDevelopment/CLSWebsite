import React from "react";
import { useTranslation } from "react-i18next";
import { CollapseItem, Wave } from "../../components";

import "./QuestionSection.scss";

export const QuestionSection = () => {
  const { t } = useTranslation("information");

  const collapseItems = [
    {
      number: "01.",
      title: t("first-q-title"),
      description: t("first-q-description"),
    },
    {
      number: "02.",
      title: t("second-q-title"),
      description: t("second-q-description"),
    },
    {
      number: "03.",
      title: t("third-q-title"),
      description: t("third-q-description"),
    },
    {
      number: "04.",
      title: t("fourth-q-title"),
      description: t("fourth-q-description"),
    },
  ];

  return (
    <>
      <Wave colorFirstWave={"#f5f9ff"} direction={"0"} />
      <div className="container--question">
        <div className="question--content">
          <h1 className="title--question">Clearsight</h1>
          <p className="description--question">{t("question-description")}</p>

          <div className="row">
            {(collapseItems || []).map((item, index) => (
              <div className="col-md-12" key={index}>
                <CollapseItem
                  title={item.title}
                  description={item.description}
                  number={item.number}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Wave colorFirstWave={"#f5f9ff"} direction={"180"} />
    </>
  );
};
