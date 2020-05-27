import React, { useState } from 'react';
import AlertContext from './utils/AlertContext';
import Home from './pages/Home';

function App() {
    const [pageState, setPageState] = useState({
        display: false,
        theme: `success`,
        onClick: (theme, display) => {
            // Remember, the setter method on state does not merge like this.setState does
            // We use the spread operator so that we don't lose our onClick method whenever the state is updated.
            setPageState({ ...pageState, theme, display });
        }
    });
    // App component that provides initial context values
    // Here we are overwriting the context object to be equal to the state of App
    return (
        <AlertContext.Provider value={pageState}>
            <Home />
        </AlertContext.Provider>
    );
}

export default App;