import './App.css';
import React, { useState } from 'react';

function App() {
    const [developerState, setDeveloperState] = useState({
        excitementLevel: 9001,
        lifeLongLearner: true,
        mood: `excited`,
        name: `Spencer`
    });

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
