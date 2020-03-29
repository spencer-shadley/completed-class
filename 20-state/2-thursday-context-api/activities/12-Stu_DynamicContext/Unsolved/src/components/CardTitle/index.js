import './style.css';
import CardTitleText from '../CardTitleText';
import React from 'react';

function CardTitle({ title }) {
    return (
        <div className="blue text-center">
            <CardTitleText title={title} />
        </div>
    );
}
CardTitle.propTypes = {
    title: PropTypes.string
};

export default CardTitle;
