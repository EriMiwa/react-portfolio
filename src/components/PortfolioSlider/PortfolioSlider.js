import React from 'react';
import './PortfolioSlider.css';
import {Container, Carousel, Row, Col} from 'react-bootstrap';

export default class PortfolioSlider extends React.Component {

    render () {
        return (
            <section className="module">
                <Container>
                    <Row className="post-images-slider">
                        <Col sm={12}>
                            <Carousel >
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={this.props.project.img01}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={this.props.project.img02}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                    <Row className="multi-columns-row">
                        <Col sm={true} md={4} lg={4}>
                            <div className="alt-features-item">
                                <h3 className="alt-features-title font-alt">Development skills I used</h3>
                                {this.props.project.skills}
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
                                <li><strong>Client: </strong><span className="font-serif">{this.props.project.client}</span>
                                </li>
                                <li><strong>Date: </strong><span className="font-serif">{this.props.project.date}</span>
                                </li>
                                <li><strong>URL: </strong><span className="font-serif"><a href={this.props.project.url} target="_blank" rel="noopener noreferrer">{this.props.project.url}</a></span>
                                </li>
                                <li><strong>Github: </strong><span className="font-serif"><a href={this.props.project.github} target="_blank" rel="noopener noreferrer">{this.props.project.github}</a></span>
                                </li>
                            </ul>
                            </div>
                        </Col>
                        <Col sm={true} md={6} lg={6}>
                            <p>{this.props.project.overview}</p>
                            <p><strong>the points that I learned by this project.</strong></p>
                            <ul style={{paddingInlineStart:"20px"}}>
                                {
                                    this.props.project.points.map(point => {
                                        return <li>{point}</li>
                                    })
                                }
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}