import React from 'react';
import './RelatedProjects.css';
import {Row, Col, Container} from 'react-bootstrap';

import Img01 from '../../assets/images/grid-portfolio1.jpg';
import Img02 from '../../assets/images/grid-portfolio2.jpg';
import Img03 from '../../assets/images/grid-portfolio3.jpg';

export default function project() {
    return (
        <>
            <section className="module">
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <h2 className="module-title font-alt">Related Projects</h2>
                        </Col>
                    </Row>
                    <ul className="works-grid works-grid-gut works-grid-3 works-hover-w" id="works-grid">
                        <li className="work-item illustration webdesign">
                            <a href="portfolio_single_featured_slider2.html">
                                <div className="work-image">
                                    <img src={Img01} alt="Portfolio Item"/>
                                </div>
                                <div className="work-caption font-alt">
                                    <h3 className="work-title">Corporate Identity</h3>
                                    <div className="work-descr">Illustration</div>
                                </div>
                            </a>
                        </li>
                        <li className="work-item marketing webdesign">
                            <a href="portfolio_single_featured_video1.html">
                                <div className="work-image">
                                    <img src={Img02} alt="Portfolio Item"/>
                                </div>
                                <div className="work-caption font-alt">
                                    <h3 className="work-title">Paper clip</h3>
                                    <div className="work-descr">Marketing</div>
                                </div>
                            </a>
                        </li>
                        <li className="work-item illustration webdesign">
                            <a href="portfolio_single_featured_image2.html">
                                <div className="work-image">
                                    <img src={Img03} alt="Portfolio Item"/>
                                </div>
                                <div className="work-caption font-alt">
                                    <h3 className="work-title">Branding</h3>
                                    <div className="work-descr">Illustration</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </Container>
            </section>
        </>
    )
}