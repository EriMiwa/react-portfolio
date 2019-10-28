import React from 'react';
import './Works.css';
import {Container, Row, Col} from "react-bootstrap";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

// import workImg4 from "../../assets/images/work-4.jpg";
// import workImg5 from "../../assets/images/work-5.jpg";
// import workImg6 from "../../assets/images/work-6.jpg";

import Img01 from '../../assets/images/ScreenShot_01.png';
import Img03 from '../../assets/images/ScreenShot_03.png';
import Img06 from '../../assets/images/ScreenShot_06.png';
// import Img08 from '../../assets/images/ScreenShot_08.png';

class Works extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            projects: [
                {
                    id:1,
                    title: "ravenous",
                    img01: Img01
                },
                {
                    id:2,
                    title: "jammming",
                    img01: Img03
                },
                {
                    id:3,
                    title: "My portfolio",
                    img01: Img06
                },
            ]
        }
    }

    render () {
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
                                {this.state.projects.map(project=>{
                                    return (
                                        <div className="work-item illustration webdesign" key={project.id}>
                                            <li>
                                                <a href={`/project/${project.id}`}>
                                                    <div className="work-image">
                                                        <img src={project.img01} alt="Portfolio Item" />
                                                    </div>
                                                    <div className="work-caption font-alt">
                                                        <h3 className="work-title">{project.title}</h3>
                                                        <div className="work-descr">Web App</div>
                                                    </div>
                                                </a>
                                            </li>
                                        </div>
                                    )
                                })}
                            </div>
                        </ul>
                    </ScrollAnimation>
                </section>
            </>
        );
    }
}

export default Works;