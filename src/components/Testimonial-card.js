import React from 'react';

export default function TestimonialCard(props) {
    return (
        <div className="testimonial-card flex border">
            <div className="profile flex">
                <img src={props.img} alt="profile image" />
                <div className="desc">
                    <p className="name primary-color">{props.name}</p>
                    <p className="revenue">{props.amount} in revenue</p>
                </div>
            </div>
            <p className='testimony'>{props.testimony}</p>
            <a href="#" className="secondary-btn border testimonial-btn">View {props.name}'s Portfolio</a>
        </div>
    );
}