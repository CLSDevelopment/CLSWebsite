import { VideoRender } from "components/VideoReneder/VideoRender";
import React, { useState } from "react";
import { Wave } from "../../../../components";

import "./MegatronColumn.scss";

type MegatronColumnProps = {
  title?: string;
  description?: string;
  descriptionOptional?: string;
  img?: string;
  sideImage?: string;
  textArea?: string;
  buttonArea?: {
    buttonWhite?: string;
    buttonTransparent?: string;
    buttonOrange?: string;
  };

  iconArea?: {
    iconFirst?: string;
    iconSecond?: string;
  };
};

export const MegatronColumn: React.FC<MegatronColumnProps> = ({
  title,
  description,
  descriptionOptional,
  img,
  textArea,
  sideImage,
  buttonArea,
  iconArea,
}) => {
  const containerImage = ["col-md-6 ", "megatron-right", sideImage];

  const [showCard, getShowCard] = useState(false);

  const openMe = () => {
    if (showCard) {
      getShowCard(false);
  
      return (document.body.style.overflowY = "scroll")
    }
    getShowCard(true);
    document.body.style.overflowY = "hidden";
  };

  return (
    <>
      <div className="container-megatron-column">
        <div className="row megatron">
          {showCard && (
            <div className="col-md-12 video">
              <VideoRender url={"https://vimeo.com/580736723"} close={openMe} />
            </div>
          )}

          <div className="col-md-6 megatron-left">
            {title && <h1 className="title-clearsight-column">{title}</h1>}
            {description && (
              <p className="description-clearsight-column">
                {description}
                <span className="footer-description-clearsight">
                  {descriptionOptional}
                </span>
              </p>
            )}
            <p className="text-area-megatron">{textArea}</p>

            {buttonArea && (
              <div className="button-megatron">
                {buttonArea.buttonWhite && (
                  <button
                    className="button-megatron-white"
                    onClick={() => openMe()}
                  >
                    {buttonArea.buttonWhite}
                  </button>
                )}

                {buttonArea.buttonTransparent && (
                  <a href="#find-work">
                    <button className="button-megatron-transparent">
                      {buttonArea.buttonTransparent}
                    </button>
                  </a>
                )}
                {buttonArea.buttonOrange && (
                  <a href="#debit-card">
                    <button className="button-megatron-orange">
                      {buttonArea.buttonOrange}
                    </button>
                  </a>
                )}
              </div>
            )}

            {iconArea && (
              <div className="megtron-icon">
                <img className="icon-megatron-right" alt="megatron" src={iconArea.iconFirst} />
                <img className="icon-megatron-left" alt="megatron" src={iconArea.iconSecond} />
              </div>
            )}
          </div>

          <div className={containerImage.join(" ")}>
            {img && (
              <img src={img} className="megatron-image" alt="megatrgon-image" />
            )}
          </div>
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
