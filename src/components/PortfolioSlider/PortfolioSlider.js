import React from 'react';
import './PortfolioSlider.css';
import {Container, Carousel, Row, Col} from 'react-bootstrap';

const PortfolioSlider = ({project}) => {
  const {images, skills, client, date, url, github, overview, points} = project
  return (
    <section className="module">
      <Container>
        <Row className="post-images-slider">
          <Col sm={12}>
            <Carousel >
              {
                images.map((image, index) => {
                  return <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={index}
                    />
                  </Carousel.Item>
                })
              }
            </Carousel>
          </Col>
      </Row>
      <Row className="multi-columns-row">
        <Col sm={true} md={4} lg={4}>
          <div className="alt-features-item">
            <h3 className="alt-features-title font-alt">Development skills I used</h3>
            {skills}
          </div>
        </Col>
      </Row>
      <hr className="divider-w mt-60 mb-60" />
      <Row className="multi-columns-row">
          <Col sm={true} md={6} lg={6}>
            <div className="work-details">
              <h5 className="work-details-title font-alt">Project Details</h5>
              <p></p>
              <ul>
                <li><strong>Client: </strong><span className="font-serif">{client}</span>
                </li>
                <li><strong>Date: </strong><span className="font-serif">{date}</span>
                </li>
                <li><strong>URL: </strong><span className="font-serif"><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></span>
                </li>
                <li><strong>Github: </strong><span className="font-serif"><a href={github} target="_blank" rel="noopener noreferrer">{github}</a></span>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={true} md={6} lg={6}>
            <p>{overview}</p>
            <p><strong>the points that I learned by this project.</strong></p>
            <ul style={{paddingInlineStart:"20px"}}>
              <li>{points}</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PortfolioSlider;