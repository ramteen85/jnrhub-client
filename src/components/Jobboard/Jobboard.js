import React, { Component } from 'react';
import styles from './Jobboard.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Jobboard extends Component {

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
        <h1>Available Jobs</h1>


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
          { <td className={styles.jobcolumn}>{job.role}</td> }
            <td className={styles.jobcolumn}><Link to={`/job/${job.id}`}>Details</Link></td>
          </tr>
          ))}
           <tr className={styles.btnwrap}>
           <button className={styles.button}><a href="/#/job/create">Create Job</a></button>
           </tr>
          </tbody>
        </table>
      </div>
    )
  }

}

export default Jobboard;
