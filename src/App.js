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
import Empjob from './components/Empjob/Empjob';
import Applications from './components/Applications/Applications';





import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class App extends Component {

  state = {
    loggedin: false,
    userType: ''
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
    localStorage.removeItem('usrType');
    // this.props.history.push('/');
    window.location.replace("/"); // maybe we can find a better way to redirect?
  }

  setType = (type) => {
    this.setState({userType: type});
  }

  render() {
    return (
      <Router>
        <div className="App">
            <Route path="/" render={(props) => <Navbar {...props} loggedin={this.state.loggedin} onLogout={this.performLogout}  />} />
            <Route path="/jobboard" exact render={(props) => <Jobboard loggedIn={this.state.loggedin} {...props} />} />
            <Route path="/job" exact component={Job} />
            <Route path="/applications" exact component={Applications} />
            <Route path="/empjob" exact component={Empjob} />
            <Switch>
              <Route path="/" exact render={ (props) => <Login {...props} loggedin={this.state.loggedin}  onLogin={this.setLoginStatus} /> } />
              <Route path="/register" exact render={ (props) => <Register {...props} onLogin={this.setLoginStatus} /> } />
              <Route path="/jobseeker" exact render={(props) => <Lobbyjs {...props} /> } />
              <Route path="/employer" exact render={ (props) => <Lobbyemp {...props} /> } />
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
