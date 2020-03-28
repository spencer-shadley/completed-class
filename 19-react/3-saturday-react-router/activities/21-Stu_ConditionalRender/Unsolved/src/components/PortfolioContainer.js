import NavTabs from './NavTabs';

import React from 'react';

class PortfolioContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: `Home`
        };
    }

    handlePageChange(page) {
        this.setState({ currentPage: page });
    }

    render() {
        return (
            <div>
                <NavTabs
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                />
                Based on `this.state.currentPage`, render the appropriate component
                here.
            </div>
        );
    }
}

export default PortfolioContainer;
