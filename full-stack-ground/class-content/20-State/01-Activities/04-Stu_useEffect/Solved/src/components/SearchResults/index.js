import './style.css';

import React from 'react';

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      <li className="list-group-item">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <a href={props.url}>{props.url}</a>
      </li>
    </ul>
  );
}

export default SearchResults;
