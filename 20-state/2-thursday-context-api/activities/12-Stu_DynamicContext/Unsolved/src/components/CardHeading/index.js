import './style.css';
import CardTitle from '../CardTitle';
import React from 'react';

function CardHeading({ title }) {
    return (
        <div>
            <CardTitle title={title} />
        </div>
    );
}
CardHeading.propTypes = {
    title: PropTypes.string
};

export default CardHeading;
