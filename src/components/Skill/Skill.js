import React from 'react';
import './Skill.css';
import '../../assets/lib/et-line-font/et-line-font.css';
import {Col} from 'react-bootstrap';

class Skill extends React.Component{
    render() {
        return (
            <>
                <Col >
                    <div className="features-item">
                        <div className="features-icon">
                            <img src={this.props.icon} style={{width:"30px"}}/>
                        </div>
                        <h3 className="features-title font-alt">{this.props.title}</h3>
                    </div>
                </Col>  
            </>
        );
    }
}

export default Skill;
