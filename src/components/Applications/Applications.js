import React, { Component } from 'react';
import styles from './Applications.module.css';
import axios from 'axios';

class Applications extends Component {

    state = {
      users: []
    }

    constructor(props) {
      super(props);
      if(this.props.loggedIn === false) {
        this.props.history.push("/");
      }
    }

    componentDidMount() {
      axios.get('http://localhost:3000/users')
      .then(res => {
        console.log(res.data);
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log(err);
      });
    }

    render() {

      return(
        <div>
          <div>
          <h1>Users Applied</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Profile</th>
              </tr>
            </thead>
            <tbody>
            { this.state.users.map((user, key) => (
              <tr key={user.id}>
              <td>{user.full_name}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      )
    }

  }
export default Applications;
