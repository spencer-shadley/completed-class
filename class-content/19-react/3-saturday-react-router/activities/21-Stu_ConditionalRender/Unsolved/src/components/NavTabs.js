import PropTypes from 'prop-types';
import React from 'react';

class NavTabs extends React.Component {
    render() {
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                        href="#home"
                        onClick={() => this.props.handlePageChange(`Home`)}
                        className="nav-link"
                    >
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#about"
                        onClick={() => this.props.handlePageChange(`About`)}
                        className="nav-link"
                    >
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#blog"
                        onClick={() => this.props.handlePageChange(`Blog`)}
                        className="nav-link"
                    >
                        Blog
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#contact"
                        onClick={() => this.props.handlePageChange(`Contact`)}
                        className="nav-link"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        );
    }
}

NavTabs.propTypes = {
    handlePageChange: PropTypes.func
};

export default NavTabs;
