import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Detail from './pages/Detail';
import FavoritesList from './pages/FavoritesList';
import Home from './pages/Home';
import Nav from './components/Nav';
import NoMatch from './pages/NoMatch';
import React from 'react';
import { StoreProvider } from './utils/GlobalState';

function App() {
    return (
        <Router>
            <div>
                <StoreProvider>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/favorites" component={FavoritesList} />
                        <Route exact path="/posts/:id" component={Detail} />
                        <Route component={NoMatch} />
                    </Switch>
                </StoreProvider>
            </div>
        </Router>
    );
}

export default App;
