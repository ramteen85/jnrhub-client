import React, { Component } from 'react';
// import {withRouter} from 'react-router-dom';
import styles from "./Login.module.css";
import axios from 'axios';

class Login extends Component {

    state = {
        username: '',
        password: '',
        invalidLogin: false

    }

    loginHandler = (e) => {
        // this.state.username
        e.preventDefault();




        // axios.post('http://localhost:3000/login', { request })
        axios.post('http://localhost:3000/user_token', {
            auth: {
                email: this.state.username,
                password: this.state.password
        }})
        .then(res =>
        {
            // LOGIN SUCCESSFUl
            //save token
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
                user: this.state.username
            }, config)
            .then(res => {
                //got ID
                console.log(res);
                if(res.data.user_type === "jobseeker") {
                    // redirect to jobseeker component
                    this.props.history.push(`/jobseeker`);

                } else if(res.data.user_type === "employer") {
                    // redirect_to employer component
                    this.props.history.push(`/employer`);
                }
            })
            .catch(err => {
                // didnt get ID
                console.log('getuser error', err);
                this.setState({invalidLogin: true});
            })


        }).catch(err => {
            //TODO: display error message in login screen
            console.log('token auth error', err);
            this.setState({invalidLogin: true});
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
                    <button className = {styles.button} type="submit">Login</button>
                </form>

                { this.state.invalidLogin
                ?
                <div className={styles.invalidLogin}>
                    Invalid Login
                </div>
                :
                ""
                }

            </div>
        );
    }

}

// export default withRouter(Login);
export default Login;
