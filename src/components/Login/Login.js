import React, { Component } from 'react';
// import {withRouter} from 'react-router-dom';
import styles from "./Login.module.css";
import axios from 'axios';
import jwtDecode from 'jwt-decode';

class Login extends Component {

    state = {
        // Stores login state in variables
        username: '',
        password: '',
        invalidLogin: false

    }

    constructor(props) {
        super(props);
        if(this.props.loggedin) {
            console.log(this.props);
            console.log(this.props.usrType);
            this.props.history.push("/" + localStorage.getItem("usrType"));
        }
    }

    loginHandler = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:3000/tokens', {
            email: this.state.username,
            password: this.state.password
        })
        .then(res => {
            console.log(res);
            localStorage.setItem("jwt", res.data.jwt);
            let result = jwtDecode(localStorage.getItem("jwt"));
            localStorage.setItem("usrType", result.userType);
            this.props.onLogin(true);

            if(result.userType === "jobseeker") {
                // redirect to jobseeker component
                this.props.history.push(`/jobseeker`);

            } else if(result.userType === "employer") {
                // redirect_to employer component
                this.props.history.push(`/employer`);
            }
        })
        .catch(err => {
            //display error
            this.setState({invalidLogin: true});
        });
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
                <div className={styles.loginform}>
                    <h2>Log In</h2><hr/><br/>
                        {/* // Login form */}
                        <form onSubmit={this.loginHandler}>
                            <input type="text" name="username" onChange={this.inputChangeHandler} placeholder="Username.."/>
                            <input type="password" name="password" onChange={this.inputChangeHandler} placeholder="Password.."/>
                            <button className = {styles.loginregisterbutton}
                            type="submit">Login</button><br/>
                            <button className={styles.button}><a href="/jnrhub-client/#/register">Register</a></button>
                        </form>
                        {/* // If details are invalid: */}
                        { this.state.invalidLogin
                        ?
                        <div className={styles.invalidLogin}>
                            Invalid Login
                        </div>
                        :
                        ""
                        }
                </div>
            </div>
        );
    }

}

export default Login;
