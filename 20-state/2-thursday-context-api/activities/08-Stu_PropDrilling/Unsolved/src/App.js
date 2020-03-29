import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import Navbar from './components/Navbar';
import React from 'react';
import Wrapper from './components/Wrapper';

function App() {
    return (
        <div>
            <Navbar />
            <Wrapper>
                <Gallery />
            </Wrapper>
            <Footer />
        </div>
    );
}

export default App;
