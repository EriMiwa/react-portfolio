import React from 'react';
import "./Feature.css";

const Feature = ({icon, title, text}) => {
  return (
    <>
      <div className="alt-features-item">
        <div className="alt-features-icon">
          <span className={icon}></span>
        </div>
        <h3 className="alt-features-title font-alt">{title}</h3>{text}
      </div>
    </>
  );
}

export default Feature;
