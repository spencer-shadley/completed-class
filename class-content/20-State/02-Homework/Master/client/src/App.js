import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Login from './pages/Login';
import Nav from './components/Nav';
import NoMatch from './pages/NoMatch';
import React from 'react';
import ShoppingCart from './pages/ShoppingCart';
import Signup from './pages/Signup';
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';

function App() {
    return (
        <Router>
            <div>
                <StoreProvider>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/cart" component={ShoppingCart} />
                        <Route exact path="/checkout" component={Checkout} />
                        <Route exact path="/success" component={Success} />
                        <Route exact path="/products/:id" component={Detail} />
                        <Route component={NoMatch} />
                    </Switch>
                </StoreProvider>
            </div>
        </Router>
    );
}

export default App;
