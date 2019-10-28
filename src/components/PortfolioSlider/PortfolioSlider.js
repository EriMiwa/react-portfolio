import React from 'react';
import './PortfolioSlider.css';
import {Container, Carousel, Row, Col} from 'react-bootstrap';

// import HtmlImg from '../../assets/images/html5.svg';
// import CssImg from '../../assets/images/css3.svg';
// import JsImg from "../../assets/images/javascript.svg";
// import ReactImg from "../../assets/images/react.svg";
// import ReduxImg from "../../assets/images/redux.svg";
// import FirebaseImg from "../../assets/images/firebase.svg";
// import MongodbImg from "../../assets/images/mongodb.svg";
// import NodeImg from "../../assets/images/node-dot-js.svg";
// import BootstrapImg from "../../assets/images/bootstrap.svg";
// import GitImg from "../../assets/images/git.svg";
// import HerokuImg from "../../assets/images/heroku.svg";

import Img01 from '../../assets/images/ScreenShot_01.png';
import Img02 from '../../assets/images/ScreenShot_02.png';

export default function PortfolioSlider(props) {
    return (
        <>
            <section className="module">
                <Container>
                    <Row className="post-images-slider">
                        <Col sm={12}>
                            <Carousel >
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Img01}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Img02}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                    <Row className="multi-columns-row">
                        <Col sm={true} md={4} lg={4}>
                            <div className="alt-features-item">
                                <h3 className="alt-features-title font-alt">Development skills I used</h3>HTML / CSS / React / XML / Yelp API
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
                                <li><strong>Client: </strong><span className="font-serif">-</span>
                                </li>
                                <li><strong>Date: </strong><span className="font-serif">August, 2019</span>
                                </li>
                                <li><strong>Github: </strong><span className="font-serif"><a href="https://github.com/EriMiwa/ravenous" target="_blank" rel="noopener noreferrer">https://github.com/EriMiwa/ravenous</a></span>
                                </li>
                            </ul>
                            </div>
                        </Col>
                        <Col sm={true} md={6} lg={6}>
                            <p>This is a React made App which can searches services using Yelp API. The services can be showed the result according to "Best mach", "Highest rated" or "Most reviewed" by using the buttons set on under the search bar. Each service has the information of own service name, address, category, star points and review numbers. This is my first project using API so that I tried to understand how it works and how I should develop the data structure.</p>
                            <p><strong>the points that I learned by this project.</strong></p>
                            <ul style={{paddingInlineStart:"20px"}}>
                                <li>Understanding how to fetch API using XML.</li>
                                <li>Understanding how to use props and states on React.</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}