import MrKrabsCard from './components/MrKrabsCard';
import React from 'react';
import SpongeBobCard from './components/SpongeBobCard';
import SquidwardCard from './components/SquidwardCard';
import Title from './components/Title';
import Wrapper from './components/Wrapper';


function App() {
    return (
        <Wrapper>
            <Title>Friends List</Title>
            <SpongeBobCard />
            <MrKrabsCard />
            <SquidwardCard />
        </Wrapper>
    );
}

export default App;
