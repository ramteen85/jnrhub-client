import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Lobbyemp from './components/Lobbyemp/Lobbyemp';
import Lobbyjs from './components/Lobbyjs/Lobbyjs';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

function App() { 
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar />
          <Switch>
            <Route path="/register" exact component={Register} />
            <Route path="/" exact component={Login} />
            <Route path="/jobseeker" exact component={Lobbyjs} />
            <Route path="/employer" exact component={Lobbyemp} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
