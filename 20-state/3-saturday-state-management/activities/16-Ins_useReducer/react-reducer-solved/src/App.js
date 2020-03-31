import './App.css';

import React, { useReducer } from 'react';

function App() {
    const [count, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'add':
                return state + 1;
            case 'subtract':
                return state - 1;
            default:
                return state;
        }
    }, 0);

    return (
        <div className="App">
            <button
                className="btn btn-success mt-5 mb-5"
                onClick={() => dispatch(`add`)}
            >
                Add
            </button>
            <div>{count}</div>
            <button
                className="btn btn-danger mt-5"
                onClick={() => dispatch(`subtract`)}
            >
                Subtract
            </button>
        </div>
    );
}

export default App;
