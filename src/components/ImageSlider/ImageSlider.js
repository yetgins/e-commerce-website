import React, { useState } from "react";
import { SliderData } from "./SliderData";
import {
  Image,
  LeftArrow,
  RightArrow,
  SlideActive,
  Slider,
} from "./ImageSlider.styles";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Slider>
      <LeftArrow onClick={prevSlide} />
      <RightArrow onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <SlideActive key={index}>
            {index === current && <Image src={slide.image} alt="" />}
          </SlideActive>
        );
      })}
    </Slider>
  );
};

export default ImageSlider;
