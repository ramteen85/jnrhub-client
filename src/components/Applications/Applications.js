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
<<<<<<< HEAD
      axios.post('http://localhost:3000/job-applicants', {
=======
      axios.post('https://whispering-chamber-55079.herokuapp.com/job-applicants', {
>>>>>>> 4a38e950dec2e18fbfc9f22bffc4937469df7e88
        token: localStorage.getItem("jwt"),
        job_id: this.props.match.params.id
      })
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
          <h1 className={styles.heading}>Users Applied</h1>
          </div>
          <div className={styles.applicants}>
            { this.state.users.length !== 0
            ?
            <table className={styles.applicants}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
            <tr> <td><span className={styles.displaynone}>invisible</span></td> </tr>
            {/* Loop to display list of applicants (at the moment every user) */}
            { this.state.users.map((user, key) => (
            <tr key={key}>
            <td className={styles.applicantcolumn}>{user.name}</td>
            <td className={styles.applicantcolumn}>{user.phone_no}</td>
            <td className={styles.applicantcolumn}>{user.email}</td>
            </tr>
          ))}
          </tbody>
          </table>
          :
          <table className={styles.applicants}>
          <tbody>
            <tr>
              <td>No Applicants Yet</td>
            </tr>
          </tbody>
          </table>
          }

          </div>
      </div>
    )
  }

}
export default Applications;
