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
      // Get users from back end
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
          <div className={styles.applicants}>
          <table className={styles.applicants}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
            {/* // Loop to display list of applicants (at the moment every user) */}
          { this.state.users.map((user, key) => (
            <tr key={user.id}>
            <td className={styles.applicantcolumn}>{user.full_name}</td>
            <td className={styles.applicantcolumn}>{user.phone_no}</td>
            <td className={styles.applicantcolumn}>{user.email}</td>
            </tr>
          ))}
            </tbody>
            </table>
            </div>
        </div>
      )
    }

  }
export default Applications;
