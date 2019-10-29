import React from 'react';
import './Works.css';
import {Container, Row, Col} from "react-bootstrap";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class Works extends React.Component {

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
                                {this.props.projects.map(project=>{
                                    return (
                                        <div className="work-item illustration webdesign" key={project.id}>
                                            <li>
                                                <a href={`/project/project${project.id}`}>
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