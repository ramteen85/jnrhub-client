import React, { Component } from 'react';
import styles from './Jobboard.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Jobboard extends Component {

  state = {
    // Holds jobs in the front end
    jobs: []
  }

  constructor(props) {
    super(props);
    if(this.props.loggedIn === false) {
      this.props.history.push("/");
    }
  }

  componentDidMount() {
    // Pulls jobs table from the back end
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
          // Loop displaying all jobs in the database
          { this.state.jobs.map((job, key) => (
            <tr key={job.id}>
            <td className={styles.jobcolumn}>{job.company_name}</td>
            <td className={styles.jobcolumn}>{job.location}</td>

            { <td className={styles.jobcolumn}>{job.role}</td> }
            // Routes to job's ID parameter, to show the job that was clicked on
            <td className={styles.jobcolumn}><Link to={`/job/${job.id}`}>Details</Link></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
  }

}

export default Jobboard;
