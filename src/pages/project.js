import React from 'react';
import Footer from '../components/Footer/Footer';
import PortfolioSlider from '../components/PortfolioSlider/PortfolioSlider';

const Project = ({...rest}) => {
  return (
    <div className="main">
      <PortfolioSlider {...rest} />
      <hr className="divider-w" />
      <hr className="divider-d" />
      <Footer/>
    </div>
  )
}

export default Project;