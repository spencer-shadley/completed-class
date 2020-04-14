import PropTypes from 'prop-types';
import React from 'react';
import '../styles/SearchBox.css';

function SearchBox({ handleSearchChange }) {
  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleSearchChange}
        />
      </form>
    </div>
  );
}

SearchBox.propTypes = {
  handleSearchChange: PropTypes.func
}

export default SearchBox;
