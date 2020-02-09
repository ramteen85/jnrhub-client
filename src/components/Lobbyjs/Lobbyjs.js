import React, { Component } from 'react';
import axios from 'axios';
// import styles from '../Lobbyjs/Lobbyjs.module.css';
import jwtDecode from 'jwt-decode';

class Lobbyjs extends Component {

    state = {
        profile: {
            jobs: [] // prevents map() undefined error on initial render
        }
    }

    componentDidMount() {

        // Gets user profile
        axios.post('http://localhost:3000/users/profile', {
            "token": localStorage.getItem("jwt")
        })
        .then(res => {
            this.setState({ profile: res.data });
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });

    }

    render() {
        return(
            <div>
                {/* // Displays user name for welcome message */}
                <h1>Welcome, {this.state.profile.full_name }</h1>
            </div>
        );
    }


}

export default Lobbyjs;
