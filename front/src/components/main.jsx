import React from "react";
import Slider from "react-slick";
import {Image} from "antd";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Main = ({ arrImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
    autoplaySpeed : 3000
  };

  return (
    <Slider {...settings}>
      {arrImages.map((image, index) => (
        <div key={index}>
          <Image src={image} alt={`slider ${index}`} preview = "false" />
        </div>
      ))}
    </Slider>
  );
};

export default Main;
 