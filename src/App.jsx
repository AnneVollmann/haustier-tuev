import React, { Component } from 'react';
import Navbar from './components/ui/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';

class App extends Component {
    state = {}
    render() {
        return  <React.Fragment>
                    <HomePage />
                    <Navbar />
                </React.Fragment>;
    }
}

export default App;