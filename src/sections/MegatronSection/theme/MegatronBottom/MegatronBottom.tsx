import React from "react";
import { Wave } from "../../../../components";
import LightSpeed from 'react-reveal/LightSpeed';

import "./MegatronBottom.scss";

type MegatronBottomProps = {
  title?: string;
  descriptionBold?: string;
  description?: string;
  descriptionBoldYellow?: string;
  img?: string;
  typeOfTitle?: string;
  className?: string;
  height: string;
};

export const MegatronBottom: React.FC<MegatronBottomProps> = ({
  title,
  description,
  descriptionBold,
  descriptionBoldYellow,
  img,
  className,
  height,
}) => {
  const isArabic = localStorage.getItem("language") === "AE";

  const titleClassArabic = [
    "title-clearsight",
    isArabic && "title-clearsight-arabic",
  ];

  return (
    <>
      <div className="container-megatron" style={{ height: height }}>
        <h1 className={titleClassArabic.join(" ")}>{title}</h1>
        <div className={className}>
          <p className="description-clearsight">{description}</p>
          <p className="footer-description-clearsight">
            <span>{descriptionBold}</span> {descriptionBoldYellow}
          </p>
        </div>

        <div className="container-megatron-image">
          {img && (
         <LightSpeed right>
            <img src={img} className="megatron-image" alt="megatrgon-image" />
            </LightSpeed>
          )}
        </div>
      </div>
      <Wave
        colorFirstWave={"#cbdefd"}
        colorSecoundWave={"#3481f3"}
        direction={"180"}
      />
    </>
  );
};
