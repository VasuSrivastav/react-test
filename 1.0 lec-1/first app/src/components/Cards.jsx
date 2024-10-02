import React from 'react';
import './Cards.css';
const Cards = (props) => {
    return (
        <div>
            <div className="card" style={props.color}>
            <h2 className="card-heading">{props.heading}</h2>
            <img src={props.imageUrl} alt={props.heading} className="card-image" />
            <p className="card-description">{props.description}</p>
        </div>
        </div>
    );
};

export default Cards;