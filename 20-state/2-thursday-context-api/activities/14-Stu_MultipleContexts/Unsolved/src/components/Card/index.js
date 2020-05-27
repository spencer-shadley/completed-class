import './style.css';

import CardBody from '../CardBody';
import CardBtn from '../CardBtn';
import CardHeading from '../CardHeading';
import CardImg from '../CardImage';

import React from 'react';

function Card() {
    return (
        <div>
            <CardHeading />
            <CardImg />
            <CardBody />
            <CardBtn style={{ opacity: 1 }} data-value="back" />
            <CardBtn style={{ opacity: 1 }} data-value="next" />
        </div>
    );
}

export default Card;
