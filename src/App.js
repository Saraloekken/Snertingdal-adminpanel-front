import React, { Component } from 'react';
import Navbar from './components/navbar';

class App extends Component {    
    render(){
        return (
            <div className="container">
            <Navbar/>
            { this.props.children }
            </div>
        );
    }
}

export default App;
