import "./CardSection.css";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from "react";
import Slider from "react-slick";
import circle from './Images/Group 30.svg'
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

  const Image = styled(motion.img)`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 500px;
    right: 304px;
`;

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
      <Image
            src={circle}
            alt='circle'
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0, scale:1.1, transition: { duration: 1 } }}
          />
      <div className="CardSection">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <img src={img} alt={img} />
            </div>
          ))}
        </Slider>
        <div className="Title">
          <h2>Event</h2>
        </div>
      </div>
    </Section>
  );
}

export default CardSection;
