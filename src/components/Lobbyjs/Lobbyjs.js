import React, { Component } from 'react';
import axios from 'axios';
import styles from '../Lobbyjs/Lobbyjs.module.css';

class Lobbyjs extends Component {

  state = {
    profile: {
      jobs: [] // prevents map() undefined error on initial render
    }
  }

  componentDidMount() {
    const token = `Bearer ${localStorage.getItem("jwt")}`;
    // Gets user profile
    axios.get('http://localhost:3000/users/profile', {
      headers: {
          "Authorization": token
      }
    })
    .then(res => {
      console.log(res.data );
      this.setState({ profile: res.data });

    })
    .catch(err => {
      console.log("error",err);
    });


  }

    render() {
        return(
            <div>
            // Displays user name for welcome message
          <h1>Welcome, {this.state.profile.full_name }</h1>

            </div>
        );
    }


}

export default Lobbyjs;
