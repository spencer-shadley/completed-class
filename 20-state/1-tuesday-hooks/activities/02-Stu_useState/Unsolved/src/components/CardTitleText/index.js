import CardContext from '../../utils/CardContext';
import React from 'react';

function CardTitleText() {
    return (
        <CardContext.Consumer>
            {({ title }) => <h2>{title}</h2>}
        </CardContext.Consumer>
    );
}

export default CardTitleText;
