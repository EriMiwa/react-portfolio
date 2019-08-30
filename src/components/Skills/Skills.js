import React from 'react';
import './Skills.css';
import { Container, Row, Col, } from "react-bootstrap";
import Skill from '../Skill/Skill'

class Skills extends React.Component{
    state = {
        skills: [
            {
                icon: "icon-lightbulb",
                title: "Website Planning",
                text: "A website should be designed for the people who will use it, so that's exactly what I do. User focused design should be the primary goal of any website.",
            },
            {
                icon: "icon-tools-2",
                title: "Web Development",
                text: "Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.",
            },
            {
                icon: "icon-calendar",
                title: "Web Project Management",
                text: "My approach to website Planning is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.",
            }
        ]
    }

    render() {
        return (
            <>
                <section className="module" id="skills">
                    <Container>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <h2 className="module-title font-alt fadein">My Skills</h2>
                                <div className="module-subtitle font-serif fadein">
                                    I'm a Freelance Web Developer & Web Project Manager based in Vancouver, Canada. Highly experienced in planning & project management websites.
                                </div>
                            </Col>
                        </Row>
                        <Row className='multi-columns-row'>
                            {
                                this.state.skills.map(skill => {
                                    return <Skill  icon={skill.icon} title={skill.title} text={skill.text} key={skill.title} />
                                })
                            }
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default Skills;
