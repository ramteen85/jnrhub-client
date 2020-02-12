import React, { Component } from 'react';
import styles from './Lobbyemp.module.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Lobbyemp extends Component {

  state = {
    jobs: []
  }

  constructor(props) {
    super(props);
    if(this.props.loggedIn === false) {
      this.props.history.push("/");
    }
  }

  componentDidMount() {
    // Gets jobs table
<<<<<<< HEAD
    axios.post('http://localhost:3000/myjobs', {
=======
    axios.post('https://whispering-chamber-55079.herokuapp.com/myjobs', {
>>>>>>> 4a38e950dec2e18fbfc9f22bffc4937469df7e88
      token: localStorage.getItem("jwt")
    })
    .then(res => {
      console.log(res.data);
      this.setState({ token: localStorage.getItem("jwt"), jobs: res.data });
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {

    return(
      <div className={styles.container}>
        <div className={styles.mainheader}>
        <h1>Jobs Posted</h1>
        </div>
        <table className={styles.jobboard}>
          <thead>
            <tr>
              <th>Company</th>
              <th>Location</th>
              <th>Role</th>
              <th>Applications</th>
            </tr>
          </thead>
          <tbody>
          {/* // Loops through all jobs, should be showing which jobs a particular */}
          {/* // Employer has created, right now just taking the first 2 */}
          { this.state.jobs.slice(0).map((job, key) => (
            <tr key={job.id}>
            <td className={styles.jobcolumn}>{job.company_name}</td>
            <td className={styles.jobcolumn}>{job.location}</td>
            { <td className={styles.jobcolumn}>{job.role}</td> }
            { <td className={styles.jobcolumn}>{job.applicants}</td> }
            {/* // Shows employer job show page */}
            <td className={styles.jobcolumn}><Link to={`/empjob/${job.id}`}>Details</Link></td>
            </tr>
          ))}

          </tbody>
        </table>
        { localStorage.getItem("usrType") !== 'jobseeker'
        ?


           <button className={styles.button}><Link to="/job/create">Create  Job</Link></button>

        :
        ""
        }
      </div>
    )
  }

}

export default Lobbyemp;
