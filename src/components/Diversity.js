import React from 'react';
import '../index.css';
import PageImage from '../images/PageImage.png';

export default function Diversity() {
    return (
        <div className="diversity-section">
            <div className="container">
                <div className="diversity-content grid">
                    <div className="diversity-portfolio flex">
                        <h2>Diversify your portfolio</h2>
                        <p>Create an even more impressive portfolio by creating case studies for your projects. Simply follow our step-by-step guide.</p>
                        <a href="#" className='secondary-btn'>Start Free Trial</a>
                    </div>
                    <div className="diversity-img">
                        <img src={PageImage} alt="page image" />
                    </div>
                </div>
            </div>
        </div >
    );
}