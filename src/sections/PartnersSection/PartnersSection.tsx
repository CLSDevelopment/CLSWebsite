import React from "react";
import { SliderComponent } from "../../components";
import img from "assets/images/logo.svg";

import "./PartnersSection.scss";
import { useTranslation } from "react-i18next";

export const PartnersSection = () => {

  const {t} = useTranslation("home")
  const data = [
    {img : img},
      {img : img},
      {img : img},
       {img : img},
      {img : img},
  ]
  return (

    <section className="continaer-partner-section">
             <p className="slider-title">{t("slider-title")}</p>
       <h1 className="slider-desctiprion">{t("slider-description")}</h1> 
      <SliderComponent data={data}/>
    </section>
  );
};
