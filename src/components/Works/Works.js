import React from 'react';
import './Works.css';
import {Container, Row, Col} from "react-bootstrap";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

import workImg4 from "../../assets/images/work-4.jpg";
import workImg5 from "../../assets/images/work-5.jpg";
import workImg6 from "../../assets/images/work-6.jpg";

import Img01 from '../../assets/images/ScreenShot_01.png';
import Img03 from '../../assets/images/ScreenShot_03.png';
import Img06 from '../../assets/images/ScreenShot_06.png';
import Img08 from '../../assets/images/ScreenShot_08.png';

function Works() {

    return (
        <>
            <section className="module pb-0" id="works">
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
                    <ul className="works-grid works-hover-w works-grid-3 cf" id="works-grid">
                        <div className="work-list">
                            <div className="work-item illustration webdesign">
                                <li>
                                    <a href="/project/1">
                                        <div className="work-image">
                                            <img src={Img01} alt="Portfolio Item" />
                                        </div>
                                        <div className="work-caption font-alt">
                                            <h3 className="work-title">ravenous</h3>
                                            <div className="work-descr">Web App</div>
                                        </div>
                                    </a>
                                </li>
                            </div>
                            <div className="work-item marketing photography">
                                <li>
                                    <a href="/project/2">
                                        <div className="work-image">
                                            <img src={Img03} alt="Portfolio Item" />
                                        </div>
                                        <div className="work-caption font-alt">
                                            <h3 className="work-title">jammming</h3>
                                            <div className="work-descr">Web App</div>
                                        </div>
                                    </a>
                                </li>
                            </div>
                            <div className="work-item illustration photography">
                                <li>
                                    <a href="/project/3">
                                        <div className="work-image">
                                            <img src={Img06} alt="Portfolio Item" />
                                        </div>
                                        <div className="work-caption font-alt">
                                            <h3 className="work-title">Disk Cover</h3>
                                            <div className="work-descr">Illustration</div>
                                        </div>
                                    </a>
                                </li>
                            </div>
                            {/* <div className="work-item marketing photography">
                                <li>
                                    <a href="portfolio_single_featured_slider1.html">
                                        <div className="work-image">
                                            <img src={workImg4} alt="Portfolio Item" />
                                        </div>
                                        <div className="work-caption font-alt">
                                            <h3 className="work-title">Business Card</h3>
                                            <div className="work-descr">Photography</div>
                                        </div>
                                    </a>
                                </li>
                            </div>
                            <div className="work-item illustration webdesign">
                                <li>
                                    <a href="portfolio_single_featured_slider1.html">
                                        <div className="work-image">
                                            <img src={workImg5} alt="Portfolio Item" />
                                        </div>
                                        <div className="work-caption font-alt">
                                            <h3 className="work-title">Business Card</h3>
                                            <div className="work-descr">Webdesign</div>
                                        </div>
                                    </a>
                                </li>
                            </div>
                            <div className="work-item marketing webdesign">
                                <li>
                                    <a href="portfolio_single_featured_slider1.html">
                                        <div className="work-image">
                                            <img src={workImg6} alt="Portfolio Item" />
                                        </div>
                                        <div className="work-caption font-alt">
                                            <h3 className="work-title">Business Cards in paper clip</h3>
                                            <div className="work-descr">Marketing</div>
                                        </div>
                                    </a>
                                </li>
                            </div> */}
                        </div>
                    </ul>
                </ScrollAnimation>
            </section>
        </>
    );
}

export default Works;