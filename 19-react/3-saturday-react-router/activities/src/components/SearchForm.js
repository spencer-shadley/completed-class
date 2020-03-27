import PropTypes from 'prop-types';
import React from 'react';

class SearchForm extends React.Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="search">Search:</label>
                    <input
                        onChange={this.props.handleInputChange}
                        value={this.props.search}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search for a Gif"
                        id="search"
                    />
                    <button
                        onClick={this.props.handleFormSubmit}
                        className="btn btn-primary mt-3"
                    >
                        Search
                    </button>
                </div>
            </form>
        );
    }
}

SearchForm.propTypes = {
    handleFormSubmit: Function,
    handleInputChange: Function,
    search: String
};

export default SearchForm;
