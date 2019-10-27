import React from 'react';
import "./Feature.css";

class Feature extends React.Component {

    render () {
        return (
            <>
                <div className="alt-features-item">
                    <div className="alt-features-icon">
                        <span className={this.props.icon}></span>
                    </div>
                    <h3 className="alt-features-title font-alt">{this.props.title}</h3>{this.props.text}
                </div>
            </>
        );
    }

}

export default Feature;
