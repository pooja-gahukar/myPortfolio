import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      alert('Message sent!');
      setFormData({ name: '', email: '', message: '' });
      setValidated(false);
    }
  };

  return (
    <Container fluid className="contact-section py-5">
      <div className="contact-inner-wrapper mx-auto px-3">
        <h2 className="text-center mb-5 section-title">Contact Me</h2>

        <Row className="align-items-center">
          {/* Contact Info */}
          <Col md={6} className="mb-4 mb-md-0 contact-info-card p-4 rounded shadow">
            <h3 className="mb-4">Contact Information</h3>
            <p><FaPhoneAlt className="me-2" /> <a >+919343250522</a></p>
            <p><FaEnvelope className="me-2" /> <a >malviyamansi115@gmail.com</a></p>
            <p><FaMapMarkerAlt className="me-2" /> Dhamnod, India</p>
            <p className="mt-4">Feel free to reach out — I’m happy to connect and collaborate!</p>
          </Col>

          {/* Contact Form */}
          <Col md={6} className="contact-form-card p-4 rounded shadow">
            <h3 className="mb-4 text-center text-md-start">Send a Message</h3>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">Name is required</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">Enter a valid email</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={4}
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">Message is required</Form.Control.Feedback>
              </Form.Group>

              <div className="text-center text-md-start">
                <Button variant="primary" type="submit">Send Message</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Contact;
