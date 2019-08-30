import React from 'react';
import './App.css';

import Navigation from '../Nav/Nav';
import Home from '../Home/Home';
import Skills from '../Skills/Skills';
import Works from '../Works/Works';
import Features from '../Features/Features';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';

class App extends React.Component{

    render() {
        return (
            <>
            <main>
                <Navigation /> 
                <Home /> 
                <div className='main'>
                    <Skills />
                    <hr className="divider-w" />
                    <Works />
                    <Features />
                    <hr className="divider-w"/>
                    <Form /> 
                    <Footer />
                </div>
            </main>
            </>
        );
    }
}

export default App;
