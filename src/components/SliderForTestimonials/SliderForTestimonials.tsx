import Slider from "react-slick";
import { Testimonials } from "../Testimonials/Testimonial";
import imgProfile from "../../assets/images/testimonialImg.svg";

import "./SliderForTestimonials.scss";

export const SliderForTestimonails = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 755,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonialsList = [
    {
      name: "Victoria Wade",
      profession: "Manager",
      text: "It is a established that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      img: imgProfile,
    },
    {
      name: "Victoria Wade",
      profession: "Manager",
      text: "It is a established that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      img: imgProfile,
    },
    {
      name: "Victoria Wade",
      profession: "Manager",
      text: "It is a established that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      img: imgProfile,
    },
    {
      name: "Victoria Wade",
      profession: "Manager",
      text: "It is a established that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      img: imgProfile,
    },
    {
      name: "Victoria Wade",
      profession: "Manager",
      text: "It is a established that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      img: imgProfile,
    },
  ];

  return (
    <div className="slider-testimonials">
      <Slider {...settings}>
        {(testimonialsList || []).map((item, index) => (
          <Testimonials
            name={item.name}
            profession={item.profession}
            text={item.text}
            img={item.img}
            key={index}
          />
        ))}
      </Slider>
    </div>
  );
};
