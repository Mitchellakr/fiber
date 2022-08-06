import React from 'react';
import TestimonailCard from '../components/Testimonial-card';
import '../index.css';
import Avatar1 from '../images/UA.svg';
import Avatar2 from '../images/UA2.svg';
import Avatar3 from '../images/UA3.svg';

export default function Tesimonials(props) {
    return (
        <div className="testimonial-section">
            <div className="container">
                <div className="testimonail-content grid">
                    <TestimonailCard
                        img={Avatar1}
                        name="Sarah Andrews"
                        amount="100k"
                        testimony="Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k."
                    />
                    <TestimonailCard
                        img={Avatar2}
                        name="Mathew Huggins"
                        amount="20k"
                        testimony="I have been getting A LOT of leads ever sinve i used Fiber's premade templates, now i just need to woek on my case studies and i'll be ready to go!"
                    />
                    <TestimonailCard
                        img={Avatar3}
                        name="Janice Dave"
                        amount="30k"
                        testimony="I only just started freelancing this year and i have already made more than i ever made in my full time job. The templates are just so amazing."
                    />
                </div>
            </div>
        </div>
    );
}

