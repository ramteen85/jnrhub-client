import React, { Component } from 'react';
import styles from './Empjob.module.css';
import axios from 'axios'
import JwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom';


class Empjob extends Component {

  state = {
    role: '',
    job: -1,
    result: ''
  }

  componentDidMount() {

    this.setState({
      result: JwtDecode(localStorage.getItem("jwt"))
    });


    // Get job whos ID matches that in params
    axios.get(`https://whispering-chamber-55079.herokuapp.com/jobs/${this.props.match.params.id}`)
    .then(res => {
      this.setState({
        ...this.state,
        job: res.data
      });
      console.log(this.state);
    })
    .catch(err => {
      console.log(err);
    });
  }

  deletePostHandler = () => {
    axios.delete(`https://whispering-chamber-55079.herokuapp.com/jobs/${this.props.match.params.id}`)
    .then(response => {
      this.props.history.push('/');
    });
  }


  render() {

    return(
      <div className={styles.container}>
          {/* // Loop to show information about a particular job */}
          <h1>{this.state.job.role}</h1>
          <p><strong>Company:</strong>{ this.state.job.company_name }</p><hr/>
          <p><strong>Role:</strong> { this.state. job.role }</p><hr/>
          <p><strong>Location:</strong> { this.state.job.location }</p><hr/>
          <p><strong>Salary:</strong> ${this.state.job.salary}</p><hr/>
          <p><strong>Job Description:</strong>
          {this.state.job.description}</p>
          <hr/><hr/>
          {/* // Current Applicant counter, starting at 0, supposed to be incrementing when users apply */}


          {/* // Destroy job path when an Employer marks a position as filled - only if the employer created the job */}
          { this.state.job.user_id === this.state.result.id
          ?
          <div className={styles.apply}>
              {/* NEEDS TO BE LINKED TO THE APPLICANTS OF THE PARAM JOB ID */}
            <br/>
            <button><Link to={`/applications/${this.state.job.id}`}>View Applicants</Link></button>
            <br/>
            <br/>
            <button onClick={this.deletePostHandler} className="Delete">Mark Position as Filled</button>
          </div>
          :
          ""
          }

        </div>

    )
  }

}

export default Empjob;
