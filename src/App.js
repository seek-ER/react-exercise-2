import React, { Component } from 'react';
import './App.scss';
import All from "./components/all";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  render() {
    return (
      <main className="app">
          <All/>
      </main>
    );
  }
}

export default App;
