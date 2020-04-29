import React from 'react';
import './Works.css';
import {Container, Row, Col} from "react-bootstrap";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

import {Link} from 'react-router-dom'

const Works = ({projects}) => {

  return (
    <section className="module" id="works">
      <Container>
        <ScrollAnimation animateIn="fadeIn">
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h2 className="module-title font-alt">My Works</h2>
              <div className="module-subtitle font-serif"></div>
            </Col>
          </Row>
        </ScrollAnimation>
      </Container>
      <ScrollAnimation animateIn="fadeIn">
        <ul className="works-grid works-grid-3 cf" id="works-grid">
          <div className="work-list">
            {
              projects.map((project, index) => {
              return (
                <div>
                  <figure className="snip1314 work-item" key={index}>
                    <img src={project.images[0]} alt="screen shot"/>
                    <div className="border one">
                      <div></div>
                    </div>
                    <div className="border two">
                      <div></div>
                    </div>
                    <figcaption>
                      <blockquote className="font-serif">{project.title}</blockquote>
                      <h5 className="font-alt">Web App<br/>
                        <span className="font-alt">{project.skills}</span>
                      </h5>
                    </figcaption>
                    <Link to={`/project/${index}`} />
                  </figure>
                </div>
              )})
            }
          </div>
        </ul>
      </ScrollAnimation>
    </section>
  );
}

export default Works;