import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';

class App extends Component {
  componentDidMount() {
    if (this.props.loggedIn) {
      fetchUserLists();
    }
  }

  render() {
    const loginView = <div><p className="App-intro">To get started, click the link below to login via Wunderlist.</p>
    <h3><a href="https://www.wunderlist.com/oauth/authorize?client_id=450fc863964df672ed75&redirect_uri=http://localhost:7000/oauth/wunderlist&state=lksjdf;lkj092uf9j2flkj">Wunderlist Login</a></h3></div>;

    const loggedInView = (
    <ul>
      { 
        userLists.map((list, index) => {
          return <li key={index} >{list.title} </li>;
        })
      }
    </ul>
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Timeboxed  |  Wunderlist</h1>
        </header>
        { this.props.loggedIn ? loggedInView : loginView };
      </div>
    );
  }
}

App.propTypes = {
  loggedIn: PropTypes.bool,
};

const mapStateToProps = state => ({
  loggedIn: !!state.token,
});

const mapDispatchToProps = dispatch => ({
  fetchUserLists: () => dispatch(userActions.fetchUserLists()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
