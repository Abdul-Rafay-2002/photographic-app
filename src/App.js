import React from 'react';
import './App.scss';
import { Hero, MyServices, Gallery, About, Contact, Footer } from './container/index';
import { NavBar } from './components/index'
const App = () => {

    return (
        <>
            <NavBar />
            <Hero />
            <MyServices />
            <Gallery />
            <About />
            <Contact />
            <Footer/>
        </>
    )
};

export default App;