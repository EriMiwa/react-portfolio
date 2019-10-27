import React from 'react';
import Title from '../components/Title/Title';
import Skills from '../components/Skills/Skills';
import Works from '../components/Works/Works';
import Features from '../components/Features/Features';
import Form from '../components/Form/Form';
import Footer from '../components/Footer/Footer';

export default function home() {
    return (
        <>
        <Title />
        <div className='main'>
            <Skills />
            <hr className="divider-w" />
            <Works />
            <Features />
            <hr className="divider-w"/>
            <Form /> 
            <Footer />
        </div>
        </>
    )
}