import React from 'react';
import './index.css'
import Diversity from './components/Diversity';
import Tesimonials from './components/Testimonials';
import Footer from './components/Footer';
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Whyfiber from './components/Whyfiber'
import Cards from './components/Cards'


export default function App() {
    return (
        <div className="app">
            <Header />
            <Hero />
            <Whyfiber />
            <Cards />
            <Diversity />
            <Tesimonials />
            <Footer />
        </div>
    );
}
