import React from "react";
import { Wave } from "../../components";

import "./CardsSectionWithBg.scss";

type CardsProps = {
  children: any;
  title: string;
  textArea?: string;
  description: string;
};

export const CardsSectionWithBg: React.FC<CardsProps> = ({
  children,
  title,
  description,
  textArea
}) => {
  return (
    <>
    <Wave colorFirstWave={"#f5f9ff"} direction={"0"}/>
    <div className="cards-section-bg">
      <div className="card-title">
        <p className="title">{title}</p>
        <h1 className="description">{description}</h1>
        { textArea && <p className="card-text-area">{textArea}</p>}
      </div>
      <div className="card-body">{children}</div>
    </div>
    <Wave colorFirstWave={"#cbdefd"} colorSecoundWave={"#f5f9ff"} direction={"180"}/>
    </>
  );
};
