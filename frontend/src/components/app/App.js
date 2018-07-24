import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Timeboxed  |  Wunderlist</h1>
        </header>
        <p className="App-intro">
          To get started, click the link below to login via Wunderlist.
        </p>
        <h3><a href="https://www.wunderlist.com/oauth/authorize?client_id=450fc863964df672ed75&redirect_uri=http://localhost:7000/oauth/wunderlist&state=lksjdf;lkj092uf9j2flkj">Wunderlist Login</a></h3>
      </div>
    );
  }
}

export default App;
