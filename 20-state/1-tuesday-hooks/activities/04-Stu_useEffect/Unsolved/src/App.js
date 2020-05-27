import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import React from 'react';
import Search from './pages/Search';
import Signup from './pages/Signup';
import Wrapper from './components/Wrapper';

const App = () => {
    document.title = `Wikipedia Searcher`;
    return (
        <Router>
            <div>
                <Navbar />
                <Wrapper>
                    <Route exact path="/" component={Search} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/search" component={Search} />
                </Wrapper>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
