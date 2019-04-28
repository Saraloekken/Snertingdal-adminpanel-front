import React { Component } from 'react';
import Navbar from './components/navbar;

function App() {
  return (
    <Navbar/>
      
      { this.props.children }
  );
}

export default App;
