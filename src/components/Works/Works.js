import React from 'react';
import './Works.css';
import {Container, Row, Col} from "react-bootstrap";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import img from '../../assets/images/ScreenShot_01.png'

class Works extends React.Component {

    render () {
        return (
            <>
                <section className="module" id="works">
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
                        <ul className="works-grid works-grid-3 cf" id="works-grid">

                            <div className="work-list">
                                {
                                    this.props.projects.map(project => {
                                    return (
                                        <div>
                                            <figure className="snip1314 work-item" key={project.id}>
                                                <img src={project.img01} alt="sample13"/>
                                                <div className="border one">
                                                    <div></div>
                                                </div>
                                                <div className="border two">
                                                    <div></div>
                                                </div>
                                                <figcaption>
                                                    <blockquote className="font-serif">{project.title}</blockquote>
                                                    <h5 className="font-alt">Web App<br/>
                                                        <span className="font-alt">{project.skills}</span>
                                                    </h5>
                                                </figcaption>
                                                <a href={`/project/project${project.id}`}></a>
                                            </figure>
                                        </div>
                                    )})
                                }
                            </div>

                            {/* <div className="work-list">
                                {this.props.projects.map(project => {
                                    return (
                                        <div className="work-item" key={project.id}>
                                            <li>
                                                <a href={`/project/project${project.id}`}>
                                                    <div className="work-image">
                                                        <img src={project.img01} alt="Portfolio Item" />
                                                    </div>
                                                    <div className="work-caption font-alt overlay-thumb">
                                                        <div class="details">
                                                            <h3 className="work-title title">{project.title}</h3>
                                                            <div className="work-descr info">Web App</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </div>
                                    )
                                })}
                            </div> */}
                        </ul>
                    </ScrollAnimation>
                </section>
            </>
        );
    }
}

export default Works;