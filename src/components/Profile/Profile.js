import React, { Component } from 'react';
import axios from 'axios';
import styles from '../Jobboard/Jobboard.module.css';
// import styles from './Profile.module.css'

class Profile extends Component {

  state = {
    profile: {
      jobs: [] // prevent map() undefined error on initial render
    }
  }

  componentDidMount() {
    const token = `Bearer ${localStorage.getItem("jwt")}`;
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


  }//componentDidMount

    render() {
        return(
            <div>

          <h1>Profile</h1>

          <div className={styles.profileStyle}>
          <p>Full name: { this.state.profile.full_name } </p>
          <p>Email: { this.state.profile.email } </p>
          <p>Phone number: { this.state.profile.phone_no } </p>
          <p>Suburb: { this.state.profile.suburb } </p>
          <p>State: { this.state.profile.state} </p>
          <p>Website: { this.state.profile.website} </p>
          <p>Account Type: { this.state.profile.user_type} </p>
          <br/>
            <br/>

        <h2>Latest Job Postings </h2>
        <br/>


          </div>


          <table className={styles.jobboard}>
            <thead>
              <tr>
                <th>Company</th>
                <th>Location</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>


            { this.state.profile.jobs.map((job, key) => (
              <tr key={job.id}>
              <td className={styles.jobcolumn}>{job.company_name}</td>
              <td className={styles.jobcolumn}>{job.location}</td>
              // {/* <td className={styles.jobcolumn}>{job.role}</td> */}
              <td className={styles.jobcolumn}><a href="#/job">Details</a></td>
              </tr>
            ))}
            </tbody>
          </table>


            </div>
        );
    }


}

export default Profile;
