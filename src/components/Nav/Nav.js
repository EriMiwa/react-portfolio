import React from 'react';
import './Nav.css';
import { Container} from "react-bootstrap";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      width: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {  
    this.setState({ width: window.innerWidth });
  }

  handleClick() {
    this.setState({ toggle: !this.state.toggle })
  }

  render() {
    return (
      <div className="menu">
        <Container className="nav-container">
          <div className="logo navbar-brand">
            <a href="/">ERIKA MIWA</a>
          </div>
          <div>
            <button 
              className="navbar-toggle" 
              onClick={() => this.handleClick()}
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          {/* PC layout */}
          <div className="navbar-right">
            <ul className="font-alt">
              <li><a href="/#home">HOME</a></li>
              <li><a href="/#skills">SKILLS</a></li>
              <li><a href="/#works">WORKS</a></li>
              <li><a href="/#aboutMe">ABOUT ME</a></li>
              <li><a href="/#contact">CONTACT</a></li>
            </ul>
          </div>
          {/* SP layout */}
          <div className="navbar-right" 
            style={(this.state.toggle && this.state.width < 770 ? 
            { display: "block" } : 
            { display: "none" })}
          >
            <ul className="font-alt">
              <li><a href="/#home">HOME</a></li>
              <li><a href="/#skills">SKILLS</a></li>
              <li><a href="/#works">WORKS</a></li>
              <li><a href="/#aboutMe">ABOUT ME</a></li>
              <li><a href="/#contact">CONTACT</a></li>
            </ul>
          </div>
        </Container>
      </div>
    );
  }
}

export default Navigation;