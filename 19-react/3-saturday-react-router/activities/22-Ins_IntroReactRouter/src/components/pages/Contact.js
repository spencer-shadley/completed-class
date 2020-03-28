import { Link, Route } from 'react-router-dom';
import Learn from './Learn';
import PropTypes from 'prop-types';
import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <h1>Contact Page</h1>
                <p>
                    Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
                    molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
                    magna a ultrices. Aenean pellentesque placerat lacus imperdiet
                    efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
                    mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
                    posuere, eget tristique dui dapibus. Maecenas fermentum elementum
                    faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
                    ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
                    dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
                    rhoncus. Etiam vel condimentum magna, quis tempor nulla.
                </p>
                <Link
                    to={`${this.props.match.url}/learn`}
                    role="button"
                    className="btn btn-link"
                >
                    Learn More
                </Link>{` `}
                <Link to="/contact" role="button" className="btn btn-link">
                    Learn Less
                </Link>
                <Route exact path={`${this.props.match.url}/learn`} component={Learn} />
            </div>
        );
    }
}

Contact.propTypes = {
    match: PropTypes.object
};

export default Contact;
