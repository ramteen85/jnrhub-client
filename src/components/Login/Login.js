import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import styles from "./Login.module.css";
import axios from 'axios';

class Login extends Component {

    state = {
        username: '',
        password: ''

    }

    loginHandler = (e) => {
        // this.state.username
        e.preventDefault();

        const username = this.state.username;
        const password = this.state.password;

        axios.post('http://localhost:3000/login', {
            email: username,
            password: password
        }).then(res => {
            console.log(res);
            if(res.data.user_type === "jobseeker") {
                // redirect to jobseeker component
                this.props.history.push(`/jobseeker`);
            } else if(res.data.user_type === "employer") {
                // redirect_to employer component
                this.props.history.push(`/employer`);
            }
        }).catch(err => {
            //TODO: display error message in login screen
            console.log(`RESPONSE: ${err}`);
        });

        //TODO:
        // clear input fields when submitting
        // grab login info and redirect to landing pages accordingly
    }

    inputChangeHandler = (event) => {
        event.preventDefault();
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        });
    }

    render() {
        return(
            <div className={styles.container}>
              <form onSubmit={this.loginHandler}>
                    <input type="text" name="username" onChange={this.inputChangeHandler} placeholder="Username.."/>
                    <input type="password" name="password" onChange={this.inputChangeHandler} placeholder="Password.."/>
                    <button type="submit">Login</button>
                </form>

                <div className={styles.invalidLogin}>

                Error: Please fill in all fields
                </div>





            </div>





        );
    }

}

export default withRouter(Login);
