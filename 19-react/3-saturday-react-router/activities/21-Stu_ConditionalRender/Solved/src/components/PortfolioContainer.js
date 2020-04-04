import React from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Home'
    };
  }


  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    switch (this.state.currentPage) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Blog':
        return <Blog />;
      default:
        return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
