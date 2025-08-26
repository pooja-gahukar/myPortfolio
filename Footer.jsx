import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer   className="portfolio-footer" >
      <Container>
        <Row className="text-center align-items-center">
          <Col md={6}>
            <p className="footer-text">© {new Date().getFullYear()} Mansi Malviya. All rights reserved.</p>
          </Col>
          <Col md={6} className="social-icons">
            <a href="https://github.com/your-github" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mansi-malviya-1b27642a0" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:your@email.com">
              <FaEnvelope />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
