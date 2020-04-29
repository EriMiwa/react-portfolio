import React from 'react';
import './Features.css';
import { Container, Row, Col } from "react-bootstrap";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Feature from '../Feature/Feature';
import featureImg from "../../assets/images/octocat.png";

class Features extends React.Component {
  state = {
    features: [
      {
        icon: "icon-strategy",
        title: "Branding",
        text: "I believe brand strength ought to be leveraged to create engaging web content, in which brand value can also be visually accurate in digital form."
      },
      {
        icon: "icon-tools-2",
        title: "Development",
        text: "My work experience with diverse teams feeds my curiosity and desire to continue developing my coding skills. I enjoy meeting with various developers in town. Learning is my joy and passion in life."
      }
    ],
    features2: [
      {
        icon: "icon-happy",
        title: "BAKING AND COOKING",
        text: "I worked as a pastry chef for 2 years in Paris and Osaka. I love delicious foods! Through food cultures, we can understand and appreciate our diversity. I also enjoy hosting friends with homemade seasonal dishes. ❤"
      },
      {
        icon: "icon-heart",
        title: "FLOWER ARRANGEMENT",
        text: "I thrive in a creative-inducing environment. Flower arrangement is one of my creative hobbies. I volunteered and learned bridal flower arrangement for 3 years and taught IKEBANA (Japanese flower arrangement)."
      }
    ]
  };

  render() {
    const {features, features2} = this.state;

    return (
      <section className="module" id="aboutMe">
        <ScrollAnimation animateIn="fadeIn">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <h2 className="module-title font-alt">About me</h2>
              </Col>
            </Row>
            <Row className="sm-layout">
              <div className="col-sm-6 col-lg-3 col-xs-12">
                {
                  features.map(feature => {
                    return <Feature  icon={feature.icon} title={feature.title} text={feature.text} key={feature.title} />
                  })
                }
              </div>
              <div className="col-md-6 col-lg-6 hidden-xs hidden-sm">
                <div className="alt-services-image align-center">
                  <img src={featureImg} alt="Feature"/>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 col-xs-12">
                {
                  features2.map(feature => {
                    return <Feature
                    icon={feature.icon} title={feature.title} text={feature.text} 
                    key={feature.title} 
                    />
                  })
                }
              </div>
            </Row>
          </Container>
        </ScrollAnimation>
      </section>
    );
  }
}

export default Features;
