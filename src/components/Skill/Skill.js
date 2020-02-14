import React from 'react';
import './Skill.css';
import '../../assets/lib/et-line-font/et-line-font.css';
import {Col} from 'react-bootstrap';

const Skill = ({icon, title}) => {
  return (
    <>
      <Col >
        <div className="features-item">
          <div className="features-icon">
            <img src={icon} style={{width:"30px"}} alt="icon"/>
          </div>
          <h3 className="features-title font-alt">{title}</h3>
        </div>
      </Col>  
    </>
  );

}

export default Skill;
