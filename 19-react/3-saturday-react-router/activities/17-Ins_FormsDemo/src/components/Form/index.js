import './style.css';

import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        // Setting the component's initial state
        this.state = {
            firstName: ``,
            lastName: ``
        };
    }

    handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating each input's state.name to value
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // Alert the user their first and last name,
        // clear`this.state.firstName` and`this.state.lastName`,
        // clearing the inputs
        alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
        this.setState({
            firstName: ``,
            lastName: ``
        });
    }

    render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div>
                <p>
                    Hello {this.state.firstName} {this.state.lastName}
                </p>
                <form className="form">
                    <input
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Last Name"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
