import React from 'react';
import './App.css';
import Home from './pages/home';
import Project from './pages/project';
import Navigation from './components/Nav/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import workImage01 from './assets/images/workImage01.jpg';
import workImage05 from './assets/images/workImage05.jpg';
import workImage03 from './assets/images/workImage03.jpg';
import workImage04 from './assets/images/workImage04.jpg';

import Img01 from './assets/images/ScreenShot_01.png';
import Img02 from './assets/images/ScreenShot_02.png';
import Img03 from './assets/images/ScreenShot_03.png';
import Img05 from './assets/images/ScreenShot_05.png';
import Img06 from './assets/images/ScreenShot_06.png';
import Img07 from './assets/images/ScreenShot_07.png';
import Img08 from './assets/images/ScreenShot_08.png';
import Img09 from './assets/images/ScreenShot_09.png';
import Img12 from './assets/images/ScreenShot_12.png';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      projects: [
        {
          id:1,
          title: "ravenous",
          workImage01: workImage01,
          img01: Img01,
          img02: Img02,
          skills: "HTML / CSS / React / XML / Yelp API",
          client: "-",
          date: "August, 2019",
          url: "https://ravenous-me.firebaseapp.com/",
          github:"https://github.com/EriMiwa/ravenous",
          overview: 'This is a React made App which can search services using Yelp API. The services can be showed the result according to "Best mach", "Highest rated" or "Most reviewed" by using the buttons set on under the search bar. Each service has the information of own service name, address, category, star points and review numbers. This is my first project using API so that I tried to understand how it works and how I should develop the data structure.',
          points: [
            "Understanding how to fetch API using XML.",
            "Understanding how to use props and states on React."
          ]
        },
        {
          id:2,
          title: "NairaEX Pro",
          workImage01: workImage05,
          img01: Img03,
          img02: Img05,
          skills: "HTML / CSS / React / Coin field API",
          client: "NairaEX",
          date: "September, 2019",
          url: "https://nairaex.pro/",
          github: "-",
          overview: 'This is a web site which introduces a cryptocurrency trading App. I implement front-end part using React and API. The API is used to show daily cryptocurrency rate.',
          points: [
            "-"
          ]
        },
        {
          id:3,
          title: "My portfolio",
          workImage01: workImage03,
          img01: Img06,
          img02: Img07,
          skills: "HTML / CSS / React / Bootstrap",
          client: "-",
          date: "October, 2019",
          url: "https://m-erika-portfolio.firebaseapp.com/",
          github: "https://github.com/EriMiwa/react-portfolio",
          overview: 'This is a React made App which introduce me and my works. I used React-Bootstrap as CSS framework and tried to use some animation libraries such as Particles.js, wow.js, react animations.',
          points: [
            "Understanding Bootstrap, animation libraries.",
            "Data structure using state for portfolio's works"
          ]
        },
        {
          id:4,
          title: "MOGU MOGU recipe!",
          workImage01: workImage04,
          img01: Img08,
          img02: Img12,
          skills: "HTML / CSS / React / Food2fork API / BootStrap",
          client: "-",
          date: "November, 2019",
          url: "https://recipes-me.firebaseapp.com/",
          github: "https://github.com/EriMiwa/recipes",
          overview: 'This is a recipe search App which shows recipe lists and recipe details.',
          points: [
            "Understanding a way how to switch lists page and details page.",
            "Understanding the usage of BootStrap."
          ]
        },
      ]
    } 
  }

  render() {
    const { projects } = this.state;

    return (
      <Router>
        <main>
        <Navigation />
        <Switch>
          <Route exact path="/" render={()=><Home projects={projects}/>}/>
          {projects.map(project => 
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
