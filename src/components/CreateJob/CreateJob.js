import React, { Component } from 'react';
import styles from './CreateJob.module.css';
import axios from 'axios'


class CreateJob extends Component {

  state = {
    company_name:"",
    role:"",
    location:"",
    salary:"",
    description:""
  }

  submitHandler = (event) => {
      event.preventDefault();
      // Pulls jobs table from the back end
      axios.post('http://localhost:3000/jobs', {
          // what data do you need to send?
          token: localStorage.getItem("jwt"),
          job: {
            company_name: this.state.company_name,
            role: this.state.role,
            location: this.state.location,
            salary: this.state.salary,
            description: this.state.description
          }
      })
      .then(response => {
          console.log(response);
          this.props.history.push('/jobboard');
      })
      .catch(err => {
          console.log(err);
      })

  }

  inputChangeHandler = (event) => {
        event.preventDefault();
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        })
    }


  render() {
    return(
      <div className={styles.container}>
        <form onSubmit={this.submitHandler}>
          <input type="text" placeholder="Your Company Name..." name="company_name" onChange={this.inputChangeHandler} />
            <input type="text" placeholder="Role..." name="role" onChange={this.inputChangeHandler} />
            <input type="text" placeholder="Location..." name="location" onChange={this.inputChangeHandler} />
            <input type="text" placeholder="Salary..." name="salary" onChange={this.inputChangeHandler} />
            <textarea type="text" placeholder="Description..."name="description"onChange={this.inputChangeHandler}></textarea>
            <button type="submit">Create Job</button>

        </form>

      </div>
    )
  }
}

export default CreateJob;
