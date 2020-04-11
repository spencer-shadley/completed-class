// https://reactjs.org/docs/hooks-reference.html#usereducer

import './App.css';
import React from 'react';

function App() {
    return (
        <div className="App">
            <button
                className="btn btn-success mt-5 mb-5"
                onClick={() => { }}
            >
                Add
            </button>
            <div>0</div>
            <button
                className="btn btn-danger mt-5"
                onClick={() => { }}
            >
                Subtract
            </button>
        </div>
    );
}

export default App;
