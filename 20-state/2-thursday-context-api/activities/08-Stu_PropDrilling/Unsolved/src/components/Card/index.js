import './style.css';
import CardBody from '../CardBody';
import CardBtn from '../CardBtn';
import CardHeading from '../CardHeading';
import CardImg from '../CardImage';
import PropTypes from 'prop-types';
import React from 'react';

function Card({ image }) {
    return (
        <div>
            <CardHeading />
            <CardImg />
            <CardBody />
            <CardBtn
                style={{ opacity: image ? 1 : 0 }}
                data-value="back"
            />
            <CardBtn style={{ opacity: image ? 1 : 0 }} />
        </div>
    );
}
Card.propTypes = {
    image: PropTypes.string
};

export default Card;
