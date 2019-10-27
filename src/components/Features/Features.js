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
                text: "Considering the value and the strength of the company's brand is a start point for making Web contents."
            },
            {
                icon: "icon-tools-2",
                title: "Development",
                text: "A wonderful serenity has taken possession of my entire soul like these sweet mornings."
            }
        ],
        features2: [
            {
                icon: "icon-happy",
                title: "BAKING AND COOKING",
                text: "I worked as a pastry chef for 2 years in Paris and in Osaka. My curiosity to find delicious foods is still working! through knowing food cultures, We understand diversity of the world. I also love to host my friends with seasonal dishes anytime❤"
            },
            {
                icon: "icon-heart",
                title: "FLOWER ARRANGEMENT",
                text: "I enjoy doing something creative when I'm free. The flower arrangement is one of my creative hobbies! I have experiences to volunteer bridal flower arrangement at a chapel over 3 years and teach IKEBANA(Japanese flower arrangement)."
            }
        ]
    };

    render() {
        return (
            <section className="module" id="aboutMe">
                <ScrollAnimation animateIn="fadeIn">
                    <Container>
                            <Row>
                                <Col md={{ span: 6, offset: 3 }}>
                                    <h2 className="module-title font-alt">About me</h2>
                                    <div className="module-subtitle font-serif">I introduce myself briefly about what things I have curiosity and what is my hobby.</div>
                                </Col>
                            </Row>
                        <Row className="sm-layout">
                            <div className="col-sm-6 col-lg-3 col-xs-12">
                                {
                                    this.state.features.map(feature => {
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
                                    this.state.features2.map(feature => {
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
