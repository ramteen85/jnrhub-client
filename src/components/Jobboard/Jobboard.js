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
    let url = '';
    if (process.env.NODE_ENV !== 'production') {
     url = `http://localhost:3000/jobs`;
    } else {
     url = `https://whispering-chamber-55079.herokuapp.com/jobs`;
   }
    axios.get(url)
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
            { localStorage.getItem("usrType") === "jobseeker"
            ?
            <td className={styles.jobcolumn}><Link to={`/job/${job.id}`}>Details</Link></td>
            :
            <td className={styles.jobcolumn}><Link to={`/empjob/${job.id}`}>Details</Link></td>
            }

          </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
  }

}

export default Jobboard;
