import React from 'react';
import { Container } from 'react-bootstrap';
import './Academic.css';

const academics = [
  {
    degree: "B.Tech – Computer Science",
    year: "2022 - 2026",
    institute: "SDBC of Technology",
    highlight: "CGPA: 7.03",
  },
  {
    degree: "HSSc",
    year: "2022",
    institute: " Govt. H. Sec. School",
    highlight: "75.4% ",
  },
  {
    degree: "HSc",
    year: "2020",
    institute: "Govt. H. Sec. School",
    highlight: "90.75% ",
  }
];

const Academic = () => {
  return (
    <div className="academic-section">
      <Container>
        <h2 className="section-title"> My Academic Journey</h2>
        <div className="card-track">
          {academics.map((item, index) => (
            <div className="academic-card" key={index}>
              <h4>{item.degree}</h4>
              <hr/>
              <p className="year">{item.year}</p>
              <p className="institute">{item.institute}</p>
              <p className="highlight">{item.highlight}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Academic;
