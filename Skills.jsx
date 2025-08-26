import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

const skills = [
  { name: "C", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/926px-C_Programming_Language.svg.png" },
  { name: "C++", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" },
  { name: "HTML", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" },
  { name: "CSS", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" },
  { name: "JavaScript", img: "https://i0.wp.com/gledevelopment.com/wp-content/uploads/2016/03/js-logo-1.png?fit=500%2C500&ssl=1" },
  { name: "jQuery", img: "https://cdn.iconscout.com/icon/free/png-256/free-jquery-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2945023.png" },
  { name: "Bootstrap", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" },
  { name: "React", img: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <Container>
        <h2 className="section-title"> My Skills</h2>
        <Row className="gy-4">
          {skills.map((skill, index) => (
            <Col key={index} xs={6} sm={4} md={3}>
              <div className="skill-card">
                <img src={skill.img} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Skills;