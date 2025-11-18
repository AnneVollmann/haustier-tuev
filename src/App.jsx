import { Component } from 'react';
import Navbar from './components/ui/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';

class App extends Component {
    state = {}
    render() {
        return  <main>
                    <HomePage/>
                    <Navbar/>
                </main>;
    }
}

export default App;