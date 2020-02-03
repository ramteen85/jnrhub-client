import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Usertype from './components/Usertype/Usertype';

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
            <Route path="/register/checktype" component={Usertype} />
            <Route path="/register" exact component={Register} />
            <Route path="/" exact component={Login} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
