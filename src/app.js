import React from 'react';
import './components/NavBar/navBar.css';
import Router from './router/router';

class App extends React.Component {
    render() {
        return (
            <div className='grilla'>
                <Router />
            </div>
        );
    }
}

export default App;
