import React from 'react';
import '../App.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import img from './Images/Slice.png'
import circlesix from './Images/Ellipse6.svg'
import circlesvn from './Images/Ellipse7.svg'
import circleeig from './Images/Ellipse8.svg'
import circlenin from './Images/Ellipse9.svg'

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-image: url(${img});
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 66% auto;
  height: 100vh;

  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 500px;
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;

  h1 {
    margin-bottom: 0.5rem;
    margin-left: 2rem;
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif;
  }

  p {
    margin: 1rem 0;
    margin-left: 2rem;
    font-size: 3.6rem;
    line-height: 1.1;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
  }
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: relative;

  //pink
  ${Image}:nth-child(1) { 
    bottom: 500px;
    left: -900px;
    width: 100%;
    height: 150%;
  }

  //orange
  ${Image}:nth-child(2) {
    top: 80px;
    right: 30px;
    width: 60%;
    height: 60%;
  }

  //green
  ${Image}:nth-child(3) {
    bottom: 120px;
    right: 400px;
    size: 10px;
    width: 30%;
    height: 25%;
    
  }

  //white
  ${Image}:nth-child(4) {
    bottom: 390px;
    right: 250px;
    width: 18%;
    height: 18%;
  }
`;

const Button = styled(motion.button)`
  padding: 0.5rem 2.0rem;
  margin-left: 2rem;
  font-size: 1rem;
  border: 2px solid #EDA634;
  border-radius: 100px;
  outline: none;
  cursor: pointer;
  background: #EDA634;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease-out;
  transition: 250ms;
`;


const HeroSection = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1
           variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}
          >
            Astaga, ada sobat PPKM!
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}
          >
            PENGEMBANGAN POTENSI DAN KARYA MAHASISWA
          </motion.p>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.95,
              backgroundColor: '#67F6E7',
              border: 'none',
              color: '#000'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            Learn More
          </Button>
        </ColumnLeft>
        <ColumnRight>
          <Image
            src={circlesix}
            alt='circle'
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0, scale:1.1, transition: { duration: 1 } }}
          />
          <Image
            src={circlesvn}
            alt='circle'
            whileTap={{ scale: 0.6 }}
            whileHover={{ scale: 1.05 }}
            drag={true}
            dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={circleeig}
            alt='circle'
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={circlenin}
            alt='circle'
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default HeroSection;
