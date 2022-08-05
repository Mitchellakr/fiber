import React from 'react';
import Card from '../components/Card';
import '../index.css';
import Star from '../images/time.svg';
import Code from '../images/code.svg';
import AllSizes from '../images/allSizes.svg';

export default function Cards(props) {
    return (
        <div className="cards-section">
            <div className="container">
                <div className="cards grid">
                    <Card
                        img={Star}
                        title="Build in minutes"
                        copy="With a selection of premde templates, you can build out a portfolio in less than 10 minutes. "
                    />
                    <Card
                        img={Code}
                        title="Add custom CSS"
                        copy="Customize your personal portfolio even more with the ability to add your own custom CSS styles. "
                    />
                    <Card
                        img={AllSizes}
                        title="Responsive"
                        copy="All fiber templates are fully responsive to ensure the experience is seemless across all devices "
                    />
                </div>
            </div>
        </div>
    );
}
