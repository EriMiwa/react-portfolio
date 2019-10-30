import React from 'react';
import './App.css';
import Home from './pages/home';
import Project from './pages/project';
import Navigation from './components/Nav/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Img01 from './assets/images/ScreenShot_01.png';
import Img02 from './assets/images/ScreenShot_02.png';
import Img03 from './assets/images/ScreenShot_03.png';
import Img05 from './assets/images/ScreenShot_05.png';
import Img06 from './assets/images/ScreenShot_06.png';
import Img07 from './assets/images/ScreenShot_07.png';

class App extends React.Component{
    constructor(props){
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
                    url: "https://github.com/EriMiwa/react-portfolio",
                    overview: 'This is a React made App which introduce me and my works. I used React-Bootstrap as CSS framework and tried to use some animation libraries such as Particles.js, wow.js, react animations.',
                    points: [
                        "Understanding Bootstrap, animation libraries.",
                        "Data structure using state for portfolio's works"
                    ]
                },
            ]
        } 
    }

    render() {
        return (
            <Router>
                <main>
                <Navigation />
                <Switch>
                    <Route exact path="/" render={()=><Home projects={this.state.projects}/>}/>
                    {this.state.projects.map(project => 
                        <Route 
                            key={project.id}
                            exact path={`/project/project${project.id}`} 
                            render={
                                () => <Project project={project} />
                            }
                        />
                    )}
                </Switch>
                </main>
            </Router>
        );
    }
}

export default App;
