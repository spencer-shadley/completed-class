import React, { useState } from 'react';
import AlertContext from './components/AlertContext';
import Home from './pages/Home';
import ThemeContext from './components/ThemeContext';
import UserContext from './components/UserContext';

function App() {
    const [user] = useState({
        name: `Spencer`,
        getUserToken
    });

    const [alert, setAlert] = useState({
        display: false,
        theme: `success`,
        onClick: (theme, display) => setAlert({ ...alert, theme, display })
    });

    function getUserToken() {
        return `SampleToken123`;
    }

    // Here we are overwriting each Context Object with values from the state of App.js and a string literal.
    return (
        <AlertContext.Provider value={alert}>
            <UserContext.Provider value={user}>
                <ThemeContext.Provider value={`dark`}>
                    <Home />
                </ThemeContext.Provider>
            </UserContext.Provider>
        </AlertContext.Provider>
    );
}

export default App;
