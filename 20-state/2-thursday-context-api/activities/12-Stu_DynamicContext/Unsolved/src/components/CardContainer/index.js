import './style.css';
import Card from '../Card';
import PropTypes from 'prop-types';
import React from 'react';

function CardContainer({ title, image, email, language, handleBtnClick }) {
    return (
        <div className="jumbotron card-container">
            <Card
                title={title}
                image={image}
                language={language}
                email={email}
                handleBtnClick={handleBtnClick}
            />
        </div>
    );
}
CardContainer.propTypes = {
    email: PropTypes.string,
    handleBtnClick: PropTypes.func,
    image: PropTypes.string,
    language: PropTypes.string,
    title: PropTypes.string
};

export default CardContainer;
