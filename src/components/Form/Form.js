import React from 'react';
import "./Form.css";
import { Container, Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

function Form() {
    return (
        <>
            <section className="module" id="contact">
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <h2 className="module-title font-alt fadein">Get in touch</h2>
                            <div className="module-subtitle font-serif"></div>
                        </Col>
                    </Row>
                    <Row className='multi-columns-row'>
                        <div className="social-links">
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
                    <Row>
                        <Col  sm={{ span: 6, offset: 3 }} className="col-sm-6 col-sm-offset-3 fadein">
                            <form id="contactForm" method="post" action="https://formspree.io/erikamiwa612@gmail.com">
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="name">Name</label>
                                    <input className="form-control" type="text" id="name" name="name" placeholder="Your Name*"
                                        required="required" data-validation-required-message="Please enter your name." />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input className="form-control" type="email" id="email" name="email" placeholder="Your Email*"
                                        required="required" data-validation-required-message="Please enter your email address." />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="7" id="message" name="message" placeholder="Your Message*"
                                        required="required" data-validation-required-message="Please enter your message."></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-block btn-round btn-d" id="cfsubmit" type="submit">Submit</button>
                                </div>
                            </form>
                            <div className="ajax-response font-alt" id="contactFormResponse"></div>
                        </Col>
                    </Row>
                </Container>
            </section>
            </>
    );
}

export default Form;