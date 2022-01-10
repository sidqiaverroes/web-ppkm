import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E5E5E5;
  overflow: hidden;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 66% auto;
  height: 100vh;
  

  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
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

const CardSection = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <Section>
      <Container>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
      </Container>
    </Section>
  );
};

export default CardSection;