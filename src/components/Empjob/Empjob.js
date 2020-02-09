import React, { Component } from 'react';
import styles from './Empjob.module.css';
import axios from 'axios'

class Empjob extends Component {

  state = {
    role: '',
    job: -1
  }

  componentDidMount() {
    // Get job whos ID matches that in params
    axios.get(`http://localhost:3000/jobs/${this.props.match.params.id}`)
    .then(res => {
      this.setState({ job: res.data });
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }

  deletePostHandler = () => {
    axios.delete(`http://localhost:3000/jobs/${this.props.match.params.id}`)
    .then(response => {
      console.log(response);
    });
  }


  render() {

    return(
      <div className={styles.container}>
          {/* // Loop to show information about a particular job */}
          <h1>{this.state.job.role}</h1><br/>
          <p><strong>Company:</strong><br/><br/>{ this.state.job.company_name }</p><br/><hr/><br/>
          <p><strong>Role:</strong> <br/><br/>{ this.state.job.role }</p><br/><hr/><br/>
          <p><strong>Location:</strong><br/><br/> { this.state.job.location }</p><br/><hr/><br/>
          <p><strong>Salary:</strong><br/><br/> ${this.state.job.salary}</p><br/><hr/><br/>
          <p><strong>Job Description:</strong><br/><br/><br/>
          {this.state.job.description}</p>
          <br/><hr/><hr/><br/>
          {/* // Current Applicant counter, starting at 0, supposed to be incrementing when users apply */}
          <p>Current Applicants: <span>{this.state.job.applicants}</span></p>
          {/* // Destroy job path when an Employer marks a position as filled */}
          <div className={styles.apply}>
            <button onClick={this.deletePostHandler} className="Delete">Mark Position as Filled</button>
          </div>
        </div>

    )
  }

}

export default Empjob;
