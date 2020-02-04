import React, { Component } from 'react';
import styles from "./Login.module.css";

class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    loginHandler = (e) => {
        e.preventDefault();
        console.log("test");
        console.log("event: ");
        console.log(e);
        console.log("state: ");
        console.log(this.state);

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
            </div>
        );
    }
}

export default Login;