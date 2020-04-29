import React from 'react';
import "./Form.css";
import { Container, Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Form = () => {
  return (
    <section className="module" id="contact">
      <Container>
        <ScrollAnimation animateIn="fadeIn">
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h2 className="module-title font-alt fadein">Get in touch</h2>
              <div className="module-subtitle font-serif">Please feel free to get in touch with me for any further inquiries.</div>
            </Col>
          </Row>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <Row className='multi-columns-row'>
            <div className="social-links">
              <a href="mailto:erikamiwa612@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelopeOpen} />
              </a>
              <a href="https://www.linkedin.com/in/erimiwa/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.instagram.com/erika_me_0u0/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://github.com/EriMiwa" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </Row>
        </ScrollAnimation>
      </Container>
    </section>
  );
}

export default Form;