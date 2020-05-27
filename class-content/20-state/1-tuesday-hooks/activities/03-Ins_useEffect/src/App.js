import './App.css';
import * as API from './utils/API';
import React, { useEffect, useState } from 'react';

function App() {
    const [developerState, setDeveloperState] = useState({
        excitementLevel: 0,
        lifeLongLearner: true,
        mood: ``,
        name: ``
    });

    useEffect(() => {
    // For demonstration purposes, we mock an API call.
        API.getDeveloper.then(res => {
            console.log(`useEffect called`)
            setDeveloperState(res);
        });
    }, []);

    return (
        <div className="card">
            <div>Name: {developerState.name}</div>
            <div>Status: {developerState.mood}</div>
            <div>Lifelong learner: {developerState.lifeLongLearner.toString()}</div>
            <div>Excitement Level: {developerState.excitementLevel}</div>
            <div className="btn-group">
                <button
                    onClick={() => setDeveloperState({ ...developerState, mood: `lazy` })}
                    className="btn btn-danger"
                >
                    Encourage Laziness
                </button>
                <button
                    onClick={() =>
                        setDeveloperState({ ...developerState, mood: `determined` })
                    }
                    className="btn btn-success"
                >
                    Fill with Determination
                </button>
            </div>
        </div>
    );
}

export default App;
