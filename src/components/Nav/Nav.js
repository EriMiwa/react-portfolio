import React from 'react';
import './Nav.css';
import { Container} from "react-bootstrap";

class Navigation extends React.Component {

    render() {
        return (
            <>
                <div className="menu">
                    <Container className="nav-container">
                            <div className="logo navbar-brand">
                                <a href="#home">ERIKA MIWA</a>
                            </div>
                            <div>
                                <button className="navbar-toggle">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>

                            <div className="navbar-right" >
                                <ul className="font-alt">
                                    <li><a href="#home">HOME</a></li>
                                    <li><a href="#skills">SKILLS</a></li>
                                    <li><a href="#works">WORKS</a></li>
                                    <li><a href="#aboutMe">ABOUT ME</a></li>
                                    <li><a href="#contact">CONTACT</a></li>
                                </ul>
                            </div>
                    </Container>
                </div>
            </>
        );
    }
}

export default Navigation;