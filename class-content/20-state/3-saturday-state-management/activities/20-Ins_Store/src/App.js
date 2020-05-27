import './App.css';
import Count from './components/Count';
import { CountProvider } from './utils/GlobalState';

import React from 'react';

function App() {
    return (
        <CountProvider>
            <div className="App">
                <Count />
            </div>
        </CountProvider>
    );
}

export default App;
