import './style.css';
import Card from '../Card';
import React from 'react';

function CardContainer(props) {
    return (
        <div className="jumbotron card-container">
            {/* TODO: give Card some props */}
            <Card />
        </div>
    );
}

export default CardContainer;
