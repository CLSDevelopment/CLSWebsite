import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import "./Slider.scss";

type SliderComponentType = {
  data?: Array<any>;
};

export const SliderComponent: React.FC<SliderComponentType> = ({ data }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
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
  const {t} = useTranslation("home")
  return (
    <div>
      {data && (
        <div className="slider">
          <Slider {...settings}>
            {(data || []).map((item, index) => (
              <div className="flip-card" key={index}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="slider-img"
                      src={item.img}
                      alt="partner-img"
                    />
                  </div>
                  <div className="flip-card-back">
               
                <a className="beacme-partner-btn" href={item.href} target="_blank"><button className="button-megatron-orange" >
                   Open Link
                </button></a>
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
