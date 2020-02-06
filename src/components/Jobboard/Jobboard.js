import React, { Component } from 'react';
import styles from './Jobboard.module.css';
import axios from 'axios';

class Jobboard extends Component {

  state = {
    jobs: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/jobs')
    .then(res => {
      console.log(res.data);
      this.setState({ jobs: res.data });
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {

    return(
      <div className={styles.container}>
        <div className={styles.mainheader}>
        <h1>Available jobs</h1>
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
          { this.state.jobs.map((job, key) => (
            <tr key={job.id}>
            <td className={styles.jobcolumn}>{job.company_name}</td>
            <td className={styles.jobcolumn}>{job.location}</td>
            {/* <td className={styles.jobcolumn}>{job.role}</td> */}
            <td className={styles.jobcolumn}><a href="#/job">Details</a></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
  }

}

export default Jobboard;
