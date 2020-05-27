import './style.css';
import CardBody from '../CardBody';
import CardBtn from '../CardBtn';
import CardHeading from '../CardHeading';
import CardImg from '../CardImage';
import PropTypes from 'prop-types';
import React from 'react';

function Card({ title, image, language, email, handleBtnClick }) {
    return (
        <div>
            <CardHeading title={title} />
            <CardImg image={image} />
            <CardBody language={language} email={email} />
            {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
            <CardBtn
                style={{ opacity: image ? 1 : 0 }}
                onClick={handleBtnClick}
                data-value="back"
            />
            <CardBtn
                style={{ opacity: image ? 1 : 0 }}
                onClick={handleBtnClick}
                data-value="next"
            />
        </div>
    );
}
Card.propTypes = {
    email: PropTypes.string,
    handleBtnClick: PropTypes.func,
    image: PropTypes.string,
    language: PropTypes.string,
    title: PropTypes.string
};

export default Card;
