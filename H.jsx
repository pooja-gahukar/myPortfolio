import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './H.css';

const H = () => {
  return (
    <div className="hero-container">
      <Container>
        <Row className="align-items-center">
          {/* Text Section */}
          <Col md={6} className="text-section">
            <h1 className="intro-text">Hi, I'm <span className="name">Mansi</span></h1>
            <h2 className="dev-title">A Creative Web Developer</h2>
            <p className="tagline">
               I turn ideas into beautiful, responsive websites using HTML, CSS, JavaScript, and React. Currently exploring full stack development to build complete web solutions.
            </p>
            <Button href="#projects" className="cta-button">View Projects</Button>
          </Col>

          {/* Human Illustration */}
          <Col md={6} className="image-section">
            <img
              src="https://img.freepik.com/premium-vector/default-female-user-profile-icon-vector-illustration_276184-169.jpg"
              className="dev-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default H;