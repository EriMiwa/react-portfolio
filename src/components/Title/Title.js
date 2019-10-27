import React from 'react';
import './Title.css';
import Particles from 'react-particles-js';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

function Title() {
    const particlesParam = {
        "particles": {
            "number": {
                "value": 100
            },
            "size": {
                "value": 3
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
            }
        }
    }   

    return (
        <section className="home-section home-full-height bg-dark bg-gradient" id="home">
            <div className="titan-caption2">
                <div className="caption-content">
                    <ScrollAnimation animateIn="fadeIn">
                        <div className="font-alt mb-30 titan-title-size-1">Hello &amp; welcome❤</div>
                        <div className="font-alt mb-40 titan-title-size-4">ERIKA'S PORTFOLIO</div>
                        <a className="section-scroll btn btn-border-w btn-round" href="#skills">Learn More</a>
                    </ScrollAnimation>
                </div>
            </div>
            <Particles 
                className="particles-js"
                params={particlesParam}
            />
        </section>
    );
}

export default Title;