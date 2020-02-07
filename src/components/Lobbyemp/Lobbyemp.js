import React, { Component } from 'react';
import styles from './Lobbyemp.module.css';
import axios from 'axios';

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
          { this.state.jobs.slice(0, 2).map((job, key) => (
            <tr key={job.id}>
            <td className={styles.jobcolumn}>{job.company_name}</td>
            <td className={styles.jobcolumn}>{job.location}</td>
            { <td className={styles.jobcolumn}>{job.role}</td> }
            { <td className={styles.jobcolumn}>{job.applicants}</td> }
            {/* <td className={styles.jobcolumn}>{job.role}</td> */}
            <td className={styles.jobcolumn}><a href="#/job/IDHERE">Details</a></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
  }

}

export default Lobbyemp;
