import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  return (
      <div className="App">
        <h1>{useSelector(state => state)}</h1>
        <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
        <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
      </div>
  );
}

export default App;
