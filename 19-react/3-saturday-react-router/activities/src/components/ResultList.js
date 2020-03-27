import PropTypes from 'prop-types';
import React from 'react';

class ResultList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="list-group">
                {this.props.results.map(result =>
                    <li className="list-group-item" key={result.id}>
                        <img
                            alt={result.title}
                            className="img-fluid"
                            src={result.images.original.url}
                        />
                    </li>
                )}
            </ul>
        );
    }
}

ResultList.propTypes = {
    results: Array
};

export default ResultList;
