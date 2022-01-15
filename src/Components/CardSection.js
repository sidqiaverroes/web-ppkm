import "./CardSection.css";
import styled from 'styled-components';
import { useState } from "react";
import Slider from "react-slick";
import GFHPic from './Images/Group 9.svg';
import ImeetPic from './Images/Group 8.svg';
import FGMPic from './Images/Group 7.svg';
import Gamatalks from './Images/Group 6.svg';
import HaloPPKM from './Images/Group 5.svg';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [GFHPic, ImeetPic, FGMPic, Gamatalks, HaloPPKM];

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FDF8F4;
  border-radius: 60px 60px 0px 0px;
`;

function CardSection() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <Section>
      <div className="CardSection">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <img src={img} alt={img} />
            </div>
          ))}
        </Slider>
        <div className="Title">
        < h2>Event</h2>
        </div>
      </div>
    </Section>
  );
}

export default CardSection;
