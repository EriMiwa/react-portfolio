import React from 'react';
import './Skills.css';
import Skill from '../Skill/Skill';
//dependencies
import { Container, Row, Col, } from "react-bootstrap";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

import HtmlImg from '../../assets/images/html5.svg';
import CssImg from '../../assets/images/css3.svg';
import JsImg from "../../assets/images/javascript.svg";
import ReactImg from "../../assets/images/react.svg";
import ReduxImg from "../../assets/images/redux.svg";
import FirebaseImg from "../../assets/images/firebase.svg";
import MongodbImg from "../../assets/images/mongodb.svg";
import NodeImg from "../../assets/images/node-dot-js.svg";
import BootstrapImg from "../../assets/images/bootstrap.svg";
import GitImg from "../../assets/images/git.svg";
import HerokuImg from "../../assets/images/heroku.svg";

class Skills extends React.Component{
  state = {
    skills: [
      {
        icon: HtmlImg,
        title: "HTML"
      },
      {
        icon: CssImg,
        title: "CSS"
      },
      {
        icon: JsImg,
        title: "JavaScript"
      },
      {
        icon: ReactImg,
        title: "React"
      },
      {
        icon: ReduxImg,
        title: "Redux"
      },
      {
        icon: FirebaseImg,
        title: "Firebase"
      },
      {
        icon: MongodbImg,
        title: "MongoDB"
      },
      {
        icon: NodeImg,
        title: "Node.js"
      },
      {
        icon: BootstrapImg,
        title: "Bootstrap"
      },
      {
        icon: GitImg,
        title: "Git"
      },
      {
        icon: HerokuImg,
        title: "Heroku"
      }
    ]
  }

  render() {
    const {skills} = this.state;
    return (
      <>
        <section className="module" id="skills">
          <Container>
            <ScrollAnimation animateIn="fadeIn">
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <h2 className="module-title font-alt">Hi, There! I'm Erika.</h2>
                  <div className="module-subtitle font-serif">
                        I'm a Web Developer & Web Project Manager based in Vancouver, Canada. I have over 5 years experience in planning & project management at Web agencies in Japan. I am passionate about finding solutions and improvements for my clients.
                  </div>
                </Col>
              </Row>
            </ScrollAnimation>

              <ScrollAnimation animateIn="fadeIn">
                <Row>
                  <Col md={{ span: 6, offset: 3 }}>
                    <h3 className="module-title-h3 font-alt">My skills</h3>
                  </Col>
                </Row>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeIn">
                <Row className='multi-columns-row skill-container'>
                  {
                    skills.map(skill => {
                      return (
                        <Skill icon={skill.icon} title={skill.title} key={skill.title} />
                      )
                    })
                  }
                </Row>
              </ScrollAnimation>
          </Container>
        </section>
      </>
    );
  }
}

export default Skills;
