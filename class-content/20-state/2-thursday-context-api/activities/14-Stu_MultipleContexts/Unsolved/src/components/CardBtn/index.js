import './style.css';

import React, { useContext } from 'react';

import UserContext from '../../utils/userContext';

function CardBtn(props) {
    const { handleBtnClick } = useContext(UserContext);
    return (
        <button
            onClick={handleBtnClick}
            className={`card-btn ${props[`data-value`]}`}
            {...props}
        />
    );
}

export default CardBtn;
