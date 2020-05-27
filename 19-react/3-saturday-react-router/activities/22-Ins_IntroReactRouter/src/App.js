import { Route, BrowserRouter as Router } from 'react-router-dom';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NavTabs from './components/NavTabs';
import React from 'react';

function App() {
    return (
        <Router>
            <div>
                <NavTabs />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
            </div>
        </Router>
    );
}

export default App;
