import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Lobbyemp from './components/Lobbyemp/Lobbyemp';
import Lobbyjs from './components/Lobbyjs/Lobbyjs';
import Jobboard from './components/Jobboard/Jobboard';
import Job from './components/Job/Job';
import Profile from './components/Profile/Profile';




import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class App extends Component {

  state = {
    loggedin: false
  }

  // logout = () => {
  //   this.setState({ loggedin: false });
  // }

  // login = () => {
  //   this.setState({ loggedin: true });
  // }

  componentDidMount() {
    if(localStorage.getItem("jwt")) {
      this.setState({ loggedin: true });
    }
  }


  setLoginStatus = (loggedIn) => {
    this.setState({ loggedin: loggedIn });
  }

  performLogout = () => {
    this.setState({ loggedin: false });
    localStorage.removeItem('jwt');
  }

  render() {
    return (
      <Router>
        <div className="App">
            <Route path="/" render={(props) => <Navbar {...props} loggedin={this.state.loggedin} onLogout={this.performLogout}  />} />
            <Route path="/jobboard" exact component={Jobboard} />
            <Route path="/job" exact component={Job} />
            <Switch>
              <Route path="/" exact render={ (props) => <Login {...props} onLogin={this.setLoginStatus} /> } />
              <Route path="/register" exact render={ (props) => <Register {...props} onLogin={this.setLoginStatus} /> } />
              <Route path="/jobseeker" exact component={Lobbyjs} />
              <Route path="/employer" exact component={Lobbyemp} />
              <Route path="/profile" exact component={Profile} />
              {
              // <Route path="/logout" exact component={Logout} />
              }
            </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
