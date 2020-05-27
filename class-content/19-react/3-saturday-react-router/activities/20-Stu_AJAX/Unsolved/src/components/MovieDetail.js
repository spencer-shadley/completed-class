import PropTypes from 'prop-types';
import React from 'react';

function MovieDetail(props) {
    return (
        <div className="text-center">
            <img
                alt={props.title}
                className="img-fluid"
                src={props.src}
                style={{ margin: `0 auto` }}
            />
            <h3>Director(s): {props.director}</h3>
            <h3>Genre: {props.genre}</h3>
            <h3>Released: {props.released}</h3>
        </div>
    );
}

MovieDetail.propTypes = {
    title: PropTypes.string,
    src: PropTypes.string,
    director: PropTypes.string,
    genre: PropTypes.string,
    released: PropTypes.string
};

export default MovieDetail;
