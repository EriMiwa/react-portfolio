import React from 'react';
import './Features.css';
import { Container, Row, Col } from "react-bootstrap";
import Feature from '../Feature/Feature';
import featureImg from "../../assets/images/promo.png";

class Features extends React.Component {
    state = {
        features: [
            {
                icon: "icon-strategy",
                title: "Branding",
                text: "A wonderful serenity has taken possession of my entire soul like these sweet mornings"
            },
            {
                icon: "icon-tools-2",
                title: "Development",
                text: "A wonderful serenity has taken possession of my entire soul like these sweet mornings."
            },
            {
                icon: "icon-target",
                title: "Marketing",
                text: "A wonderful serenity has taken possession of my entire soul like these sweet mornings."
            },
            {
                icon: "icon-tools",
                title: "Design",
                text: "A wonderful serenity has taken possession of my entire soul like these sweet mornings."
            }
        ],
        features2: [
            {
                icon: "icon-camera",
                title: "PHOTOGRAPHY",
                text: "A wonderful serenity has taken possession of my entire soul like these sweet mornings"
            },
            {
                icon: "icon-mobile",
                title: "MOBILE",
                text: "A wonderful serenity has taken possession of my entire soul like these sweet mornings."
            },
            {
                icon: "icon-linegraph",
                title: "MUSIC",
                text: "A wonderful serenity has taken possession of my entire soul like these sweet mornings."
            },
            {
                icon: "icon-basket",
                title: "SHOP",
                text: "A wonderful serenity has taken possession of my entire soul like these sweet mornings."
            }
        ]
    };

    render() {
        return (
            <>
                <section className="module" id="aboutMe">
                    <Container>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <h2 className="module-title font-alt fadein">About me</h2>
                                {/* <div className="module-subtitle font-serif fadein">description about myself</div> */}
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
                </section>
            </>
        );
    }
}

export default Features;
