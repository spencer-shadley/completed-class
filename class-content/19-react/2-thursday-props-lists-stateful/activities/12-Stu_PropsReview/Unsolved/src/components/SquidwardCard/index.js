import './style.css';

import React from 'react';

function SquidwardCard() {
    return (
        <div className="card">
            <div className="img-container">
                <img
                    alt="Squidward"
                    // eslint-disable-next-line max-len
                    src="https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626"
                />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> Squidward
                    </li>
                    <li>
                        <strong>Occupation:</strong> Cashier
                    </li>
                    <li>
                        <strong>Location:</strong> An Easter Island Head
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SquidwardCard;