import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaCuttlefish,
  FaDownload,
} from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <Container fluid className="about-section py-5">
      <div className="about-inner-wrapper mx-auto px-3">
        <Row className="align-items-center">
          {/* Text Content */}
          <Col md={6} className="about-text animate-slide-left">
            <h2 className="mb-3">About Me</h2>
            <p>
              Hi! I'm <strong>Mansi Malviya</strong>, a frontend web developer with a solid
              foundation in programming and user interface design. I began my journey with
              <strong> C</strong> and <strong>C++</strong>, which developed my logical thinking and
              problem-solving abilities.
            </p>
            <p>
              Over time, I discovered my passion for web development and gained hands-on experience
              in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>,
              <strong> Bootstrap</strong>, and <strong>React</strong>. I enjoy building responsive
              and accessible websites that offer great user experiences.
            </p>
            <p>
              I'm currently learning <strong>Full Stack Development</strong>, expanding my skills to
              include backend technologies and databases. I'm always looking for ways to grow, take
              on new challenges, and contribute to impactful web projects.
            </p>

         
           

            {/* Resume Button */}
            <Button
              variant="primary"
              
              className="resume-button"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload className="me-2" />
              Download Resume
              
            </Button>
          </Col>

          {/* Image */}
          <Col md={6} className="text-center animate-fade-in">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkSLfES1MzXrqbwPRPJk3JN0tbLMT_iRPaztwn2tm4RNgPrEtXDb4ibwifrMZwIs1liMA&usqp=CAU"
              alt="Frontend Developer"
              fluid
              roundedCircle
              className="about-image"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default About;
