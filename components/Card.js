import React from 'react';

export default function Card(props) {
    return (
        <div className="card flex">
            <img src={props.img} alt="time" />
            <h3>{props.title}</h3>
            <p>{props.copy}</p>
        </div>
    );
}

