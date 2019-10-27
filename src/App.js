import React from 'react';
import './App.css';
import home from './pages/home';
import project from './pages/project';
import Navigation from './components/Nav/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component{

    render() {
        return (
            <Router>
                <main>
                <Navigation /> 
                <Switch>
                    <Route exact path="/" component={home} />
                    <Route exact path="/project" component={project} />
                </Switch>
                </main>
            </Router>
        );
    }
}

export default App;
