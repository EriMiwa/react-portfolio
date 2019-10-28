import React from 'react';
import Footer from '../components/Footer/Footer';
import PortfolioSlider from '../components/PortfolioSlider/PortfolioSlider';
// import RelatedProject from '../components/RelatedProjects/RelatedProjects';

export default class Project extends React.Component{
    render(){
        return (
            <div className="main">
                <PortfolioSlider />
                <hr className="divider-w" />
                {/* <RelatedProject /> */}
                <hr className="divider-d" />
                <Footer/>
            </div>
        )
    }
}