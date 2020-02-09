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
import CreateJob from './components/CreateJob/CreateJob';







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
    // Redirection
    window.location.replace("/");
  }

  setType = (type) => {
    this.setState({userType: type});
  }

  render() {
    return (
      // Routing
      <Router>
        <div className="App">
            <Route path="/" render={(props) => <Navbar {...props} loggedin={this.state.loggedin} onLogout={this.performLogout}  />} />


            <Switch>
              <Route path="/" exact render={ (props) => <Login {...props} loggedin={this.state.loggedin}  onLogin={this.setLoginStatus} /> } />
                {/* // Route to Job Board */}
              <Route path="/jobboard" exact render={(props) => <Jobboard loggedIn={this.state.loggedin} {...props} />} />
                {/* // View Create Job Page */}
              <Route path="/job/create" exact render={ (props) => <CreateJob {...props} /> } />
              {/* // Route to an individual Job, for Job seekers */}
              <Route path="/job/:id" exact render={(props) => <Job {...props} /> } />
              {/* // Route to applicants, for employers */}
              <Route path="/applications" exact component={Applications} />
              {/* // Route to an individual job, for Employers */}
              <Route path="/empjob/:id" exact component={Empjob} />
              {/* // Registration Page */}
              <Route path="/register" exact render={ (props) => <Register {...props} onLogin={this.setLoginStatus} /> } />
              {/* // Job Seeker landing page */}
              <Route path="/jobseeker" exact render={(props) => <Lobbyjs {...props} /> } />
              {/* // Employer landing page */}
              <Route path="/employer" exact render={ (props) => <Lobbyemp {...props} /> } />
              {/* // View Profile page */}
              <Route path="/profile" exact component={Profile} />
            </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
