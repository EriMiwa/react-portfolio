import React from 'react';
import Footer from '../components/Footer/Footer';
import PortfolioSlider from '../components/PortfolioSlider/PortfolioSlider';
// import RelatedProject from '../components/RelatedProjects/RelatedProjects';

import Img01 from '../assets/images/ScreenShot_01.png';
import Img02 from '../assets/images/ScreenShot_02.png';
import Img03 from '../assets/images/ScreenShot_03.png';
import Img04 from '../assets/images/ScreenShot_04.png';
import Img05 from '../assets/images/ScreenShot_05.png';
import Img06 from '../assets/images/ScreenShot_06.png';
import Img07 from '../assets/images/ScreenShot_07.png';

export default class Project extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    id:1,
                    title: "ravenous",
                    img01: Img01,
                    img02: Img02,
                    skills: "HTML / CSS / React / XML / Yelp API",
                    client: "-",
                    date: "August, 2019",
                    url: "https://github.com/EriMiwa/ravenous",
                    overview: 'This is a React made App which can search services using Yelp API. The services can be showed the result according to "Best mach", "Highest rated" or "Most reviewed" by using the buttons set on under the search bar. Each service has the information of own service name, address, category, star points and review numbers. This is my first project using API so that I tried to understand how it works and how I should develop the data structure.',
                    points: [
                        "Understanding how to fetch API using XML.",
                        "Understanding how to use props and states on React."
                    ]
                },
                {
                    id:2,
                    title: "jammming",
                    img01: Img03,
                    img02: Img05,
                    skills: "HTML / CSS / React / Spotify API",
                    client: "-",
                    date: "September, 2019",
                    url: "https://github.com/EriMiwa/jammming",
                    overview: 'This is a React made App which can search songs and make play lists on Spotify using API. The result area shows the songs match with your searched keywords. You can create your original play lists picked from the search result, and it can store on your Spotify account.',
                    points: [
                        "Understanding how to fetch Spotify API, store the play list on user account"
                    ]
                },
                {
                    id:3,
                    title: "My portfolio",
                    img01: Img06,
                    img02: Img07,
                    skills: "HTML / CSS / React / Bootstrap",
                    client: "-",
                    date: "October, 2019",
                    url: "https://portfolio-6f76b.firebaseapp.com/",
                    overview: 'This is a React made App which introduce me and my works. THe main concept of this project is ',
                    points: [
                        "Understanding how to fetch Spotify API, store the play list on user account"
                    ]
                },
            ]
        }
    }
    render(){
        return (
            <div className="main">
                <PortfolioSlider projects={this.state.projects} />
                <hr className="divider-w" />
                {/* <RelatedProject /> */}
                <hr className="divider-d" />
                <Footer/>
            </div>
        )
    }
}