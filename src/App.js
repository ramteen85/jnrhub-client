import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Lobbyemp from './components/Lobbyemp/Lobbyemp';
import Lobbyjs from './components/Lobbyjs/Lobbyjs';
import Logout from './components/Logout/Logout';


import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class App extends Component {

  state = {
    loggedin: false
  }

  logout = () => {
    this.setState({ loggedin: false });
  }

  render() {
    return (
      <Router>
        <div className="App">
            <Navbar loggedin={this.state.loggedin} logout={this.logout} />
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/jobseeker" exact component={Lobbyjs} />
              <Route path="/employer" exact component={Lobbyemp} />
              <Route path="/logout" exact component={Logout} />
            </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
