import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import "./Slider.scss";

type SliderComponentType = {
  data?: Array<any>;
};

export const SliderComponent: React.FC<SliderComponentType> = ({ data }) => {
  
  const { t } = useTranslation("home");

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          centerMode: true,
          centerPadding: "60px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      {data && (
        <div className="slider">
          <Slider {...settings}>
            {(data || []).map((item, index) => (
              <div className="flip-card" key={index}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    {item.href && <a className="img-href" href={item.href}>
                    <img
                      className="slider-img"
                      src={item.img}
                      alt="partner-img"
                    />
                    </a>}
                  </div>
                  <div className="flip-card-back">
                    <a
                      className="beacme-partner-btn"
                      href={item.href}
                      target="_blank"
                    >
                      <button className="button-megatron-orange">
                        {t("slider-card-btn")}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};
