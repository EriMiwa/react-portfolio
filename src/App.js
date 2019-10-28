import React from 'react';
import './App.css';
import Home from './pages/home';
import Project from './pages/project';
import Navigation from './components/Nav/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            projects: [
                {
                    id:1,
                    title:"ravenous",
                    img01:"./assets/images/ScreenShot_01.png"
                },
                {
                    id:2,
                    title:"jammming",
                    img02:"./assets/images/ScreenShot_02.png"
                }
            ]
        } 
    }

    render() {
        return (
            <Router>
                <main>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/project" render={()=><Project projects={this.state.projects}/>}/>
                </Switch>
                </main>
            </Router>
        );
    }
}

export default App;
