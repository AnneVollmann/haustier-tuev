import React, { Component } from 'react';
import Navbar from './components/navbar';
import Pet from './components/pet';

class App extends Component {
    state = {}
    render() {
        return  <React.Fragment>
                    <Navbar />
                    <div className='pets-list'>
                        <Pet />
                        <Pet />
                        <Pet />
                    </div>
                </React.Fragment>;
    }
}

export default App;