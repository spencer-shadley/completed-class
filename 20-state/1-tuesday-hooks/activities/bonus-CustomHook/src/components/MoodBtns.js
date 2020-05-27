import PropTypes from 'prop-types';
import React from 'react';

function MoodBtns(props) {
    return (
        <div>
            <button
                onClick={() => props.changeMood(`lazy`)}
                className="btn btn-danger mx-4"
            >
                Encourage Laziness
            </button>
            <button
                onClick={() => props.changeMood(`determined`)}
                className="btn btn-success mx-4"
            >
                Fill with Determination
            </button>
        </div>
    );
}
MoodBtns.propTypes = {
    changeMood: PropTypes.func
};

export default MoodBtns;
