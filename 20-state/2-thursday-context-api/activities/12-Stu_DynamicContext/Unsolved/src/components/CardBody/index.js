import PropTypes from 'prop-types';
import React from 'react';

function CardBody({ language, email }) {
    return (
        <div>
            <h4>Favorite language: {language}</h4>
            <h4>Email: {email}</h4>
        </div>
    );
}
CardBody.propTypes = {
    email: PropTypes.string,
    language: PropTypes.string
};

export default CardBody;
