import './style.css';
import PropTypes from 'prop-types';
import React from 'react';

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="language">Search Term:</label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="term"
                    list="term"
                    type="text"
                    className="form-control"
                    placeholder="Type in a search term to begin"
                    id="term"
                />
            </div>
        </form>
    );
}
SearchForm.propTypes = {
    handleInputChange: PropTypes.func,
    search: PropTypes.string
};

export default SearchForm;
