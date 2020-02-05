import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Lobbyemp from './components/Lobbyemp/Lobbyemp';
import Lobbyjs from './components/Lobbyjs/Lobbyjs';

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() { 
  return (
    <Router>
      <div className="App">
          <Switch>
            <Navbar loggedin={false} />
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/jobseeker" exact component={Lobbyjs} />
            {/* <Route path="/jobseeker" exact component={Lobbyhome} /> */}
            <Route path="/employer" exact component={Lobbyemp} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
