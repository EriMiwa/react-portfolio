import React from 'react';
import './Works.css';
import {Container, Row, Col} from "react-bootstrap";


import workImg1 from "../../assets/images/work-1.jpg";
import workImg2 from "../../assets/images/work-2.jpg";
import workImg3 from "../../assets/images/work-3.jpg";
import workImg4 from "../../assets/images/work-4.jpg";
import workImg5 from "../../assets/images/work-5.jpg";
import workImg6 from "../../assets/images/work-6.jpg";

function Works() {

    return (
        <>
            <section className="module pb-0" id="works">
                <Container>
                    <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                            <h2 className="module-title font-alt fadein">My Works</h2>
                                <div className="module-subtitle font-serif"></div>
                        </Col>
                    </Row>
                </Container>
                <ul className="works-grid works-hover-w works-grid-3 fadein cf" id="works-grid">
                    <div class="work-list">
                        <div className="work-item illustration webdesign">
                            <li>
                                <a href="portfolio_single_featured_slider1.html">
                                    <div className="work-image">
                                        <img src={workImg1} alt="Portfolio Item" />
                                    </div>
                                    <div className="work-caption font-alt">
                                        <h3 className="work-title">Corporate Identity</h3>
                                        <div className="work-descr">Illustration</div>
                                    </div>
                                </a>
                            </li>
                        </div>
                        <div className="work-item marketing photography">
                            <li>
                                <a href="portfolio_single_featured_slider1.html">
                                    <div className="work-image">
                                        <img src={workImg2} alt="Portfolio Item" />
                                    </div>
                                    <div className="work-caption font-alt">
                                        <h3 className="work-title">Bag MockUp</h3>
                                        <div className="work-descr">Marketing</div>
                                    </div>
                                </a>
                            </li>
                        </div>
                        <div className="work-item illustration photography">
                            <li>
                                <a href="portfolio_single_featured_slider1.html">
                                    <div className="work-image">
                                        <img src={workImg3} alt="Portfolio Item" />
                                    </div>
                                    <div className="work-caption font-alt">
                                        <h3 className="work-title">Disk Cover</h3>
                                        <div className="work-descr">Illustration</div>
                                    </div>
                                </a>
                            </li>
                        </div>
                        <div className="work-item marketing photography">
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
                        </div>
                    </div>
                </ul>
            </section>
        </>
    );
}

export default Works;