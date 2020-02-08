import React, { Component } from 'react';
// import {withRouter} from 'react-router-dom';
import styles from "./Login.module.css";
import axios from 'axios';

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

        // Gets user token
        axios.post('http://localhost:3000/user_token', {
            auth: {
                email: this.state.username,
                password: this.state.password
        }})
        .then(res =>
        {
            // LOGIN SUCCESSFUl
            // save token
            localStorage.setItem("jwt", res.data.jwt);
            let token = `Bearer ${localStorage.getItem("jwt")}`;
            this.props.onLogin(true);  // runs setLoginStatus() in parent component App.js (to update nav)

            let config = {
                headers: {
                    "Authorization": token
                }
            };

            //get user ID

            axios.post(`http://localhost:3000/users/getuser`, {
                user: this.state.username,
                password: this.state.password
            }, config)
            .then(res => {
                //got ID
                console.log(res);
                if(res.data.user_type === "jobseeker") {
                    // redirect to jobseeker component
                    localStorage.setItem("usrType", "jobseeker");
                    this.props.history.push(`/jobseeker`);

                } else if(res.data.user_type === "employer") {
                    // redirect_to employer component
                    localStorage.setItem("usrType", "employer");
                    this.props.history.push(`/employer`);
                }
            })
            .catch(err => {
                // if didnt get ID
                console.log('getuser error', err);
                this.setState({invalidLogin: true});
            })


        }).catch(err => {
            console.log('token auth error', err);
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
<<<<<<< HEAD
                {/* // Login form */}
=======
                {/* Login form */}
>>>>>>> 5233878361b7a4157344829f689ee7f6cbb6a53e
                <form onSubmit={this.loginHandler}>
                    <input type="text" name="username" onChange={this.inputChangeHandler} placeholder="Username.."/>
                    <input type="password" name="password" onChange={this.inputChangeHandler} placeholder="Password.."/>
                    <button className = {styles.loginregisterbutton}
                    type="submit">Login</button><br/>
                    <button className={styles.button}><a href="/#/register">Register</a></button>
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
