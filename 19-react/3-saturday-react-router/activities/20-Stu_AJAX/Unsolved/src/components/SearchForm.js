import React from 'react';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="search">Search:</label>
                    <input
                        onChange={this.props.handleInputChange}
                        value={this.props.value}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search For a Movie"
                        id="search"
                    />
                    <br />
                    <button onClick={this.props.handleFormSubmit} className="btn btn-primary">
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
    value: String
};


export default SearchForm;
