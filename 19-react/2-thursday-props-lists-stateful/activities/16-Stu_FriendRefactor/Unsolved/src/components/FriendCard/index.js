import './style.css';

import React from 'react';

function FriendCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Occupation:</strong> {props.occupation}
                    </li>
                    <li>
                        <strong>Address:</strong> {props.location}
                    </li>
                </ul>
            </div>
            <span className="remove">𝘅</span>
        </div>
    );
}

FriendCard.propTypes = {
    image: String,
    location: String,
    name: String,
    occupation: String
};

export default FriendCard;
