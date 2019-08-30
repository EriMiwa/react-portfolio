import React from 'react';
import './Skill.css';
import '../../assets/lib/et-line-font/et-line-font.css';

class Skill extends React.Component{
    render() {
        return (
            <>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="features-item fadein">
                        <div className="features-icon"><span className={this.props.icon}></span></div>
                        <h3 className="features-title font-alt">{this.props.title}</h3>
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default Skill;
