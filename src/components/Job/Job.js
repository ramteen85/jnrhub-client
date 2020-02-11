import React, { Component } from 'react';
import styles from './Job.module.css';
import axios from 'axios';

class Job extends Component {

  state = {
    profileId: -1,
    job: ''
  }

  componentDidMount() {
    if(this.props.match.params.id) {
      // Get job whos ID matches that in params
      axios.get(`http://localhost:3000/jobs/${this.props.match.params.id}`)
      .then(res => {
        console.log(res);
        this.setState({ profileId: this.props.match.params.id, job: res.data });
      })
      .catch(err => console.log(err));
    } else {
      this.props.history.push('/jobboard');
    }
  }

  applyForJob = () => {
    console.log('Applied');
    axios.post('http://localhost:3000/applications', {
      token: localStorage.getItem("jwt"),
      job_id: this.props.match.params.id
    })
    .then(res => {
      console.log(res.data);
        // redirect to home, using this.props.history.push()
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {

    return(
      <div className={styles.container}>
        {/* // Loop to show job information */}
          <h1>{this.state.job.role}</h1><br/>
          <p><strong>Company:</strong><br/><br/>{this.state.job.company_name}</p><br/><hr/><br/>
          <p><strong>Role:</strong> <br/><br/>Junior Front End Developer</p><br/><hr/><br/>
          <p><strong>Location:</strong><br/><br/> {this.state.job.location}</p><br/><hr/><br/>
          <p><strong>Salary:</strong><br/><br/> ${this.state.job.salary}</p><br/><hr/><br/>
          <p><strong>Job Description:</strong><br/><br/><br/>
          {this.state.job.description}</p>
          <br/><hr/><hr/><br/>
          <div className={styles.apply}>
          {/* // Apply button, not functional yet */}
          <a onClick={this.applyForJob}>Apply Now!</a>
          </div>
        </div>

    )
  }

}

export default Job;
