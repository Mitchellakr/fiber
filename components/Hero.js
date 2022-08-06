import React from 'react';
import heroillustration from '../images/heroillustation.png';
import Checkmark from '../images/Checkmark.svg';
import Star from '../images/star.svg';
import '../index.css'

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-section-content grid">
                    <div className="writeup">
                        <div className="rating flex">
                            <div className="stars flex">
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                            </div>
                            <p>Rated 4.8/5 (243 reviews)</p>
                        </div>
                        <h1>Create your portfolio in minutes.</h1>
                        <p>With Fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful templates.</p>
                        <div className="hero-btn flex">
                            <a href="#" className="primary-btn">Start Free Trial</a>
                            <a href="#" className="underline"><u>View Examples</u></a>
                        </div>
                        <div className="free blade flex">
                            <div className="free flex"><img src={Checkmark} alt="checkmark" /><p>No Credit Card Required</p></div>
                            <div className="free flex"><img src={Checkmark} alt="checkmark" /><p>10 Free Template</p></div>
                        </div>
                    </div>
                    <div className="illustration">
                        <img src={heroillustration} alt="hero illustration" />
                    </div>
                </div>
            </div>
        </section>
    );
}