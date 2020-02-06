import React, { Component } from 'react';
import styles from './Jobboard.module.css';
import axios from 'axios';

class Jobboard extends Component {

  state = {

  }

  render() {

    const jobs = axios.get('http://localhost:3000/jobs')
    .then(res => {
      console.log(res.data);
      // res.data.map((job, key) => {
      //   <tr key={job.id}>
      //     <td className={styles.jobcolumn}>{job.company_name}</td>
      //     <td className={styles.jobcolumn}>{job.location}</td>
      //     <td className={styles.jobcolumn}>{job.role}</td>
      //   </tr>
      // });
    })
    .catch(err => {
      console.log(err);
    });

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
          <tr className={styles.job}>
            <td className={styles.jobcolumn}>Google</td>
            <td className={styles.jobcolumn}>Sydney</td>
            <td className={styles.jobcolumn}>Junior Front End</td>
            <td className={styles.jobcolumn}><a href="#/job">Apply</a></td>
          </tr>
          <tr className={styles.job}>
            <td className={styles.jobcolumn}>Facebook</td>
            <td className={styles.jobcolumn}>Melbourne</td>
            <td className={styles.jobcolumn}>Senior Front End</td>
            <td className={styles.jobcolumn}><a href="#/job">Apply</a></td>
          </tr>
          <tr className={styles.job}>
            <td className={styles.jobcolumn}>Uber</td>
            <td className={styles.jobcolumn}>New York</td>
            <td className={styles.jobcolumn}>Graduate Front End</td>
            <td className={styles.jobcolumn}><a href="#/job">Apply</a></td>
          </tr>
          <tr className={styles.job}>
            <td className={styles.jobcolumn}>General Assembly</td>
            <td className={styles.jobcolumn}>Sydney</td>
            <td className={styles.jobcolumn}>Instructor</td>
            <td className={styles.jobcolumn}><a href="#/job">Apply</a></td>
          </tr>
          <tr className={styles.job}>
            <td className={styles.jobcolumn}>Grumpy Sailor</td>
            <td className={styles.jobcolumn}>Sydney</td>
            <td className={styles.jobcolumn}>Creative Developer</td>
            <td className={styles.jobcolumn}><a href="#/job">Apply</a></td>
          </tr>
          <tr className={styles.job}>
            <td className={styles.jobcolumn}>Blizzard</td>
            <td className={styles.jobcolumn}>Sydney</td>
            <td className={styles.jobcolumn}>Game Destroyer (developer)</td>
            <td className={styles.jobcolumn}><a href="#/job">Apply</a></td>
          </tr>
          <tr className={styles.job}>
            <td className={styles.jobcolumn}>Westpac</td>
            <td className={styles.jobcolumn}>Sydney</td>
            <td className={styles.jobcolumn}>Junior Back End</td>
            <td className={styles.jobcolumn}><a href="#/job">Apply</a></td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }

}

export default Jobboard;
