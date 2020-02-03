import React, { Component } from 'react';
import styles from "./Login.module.css";

class Login extends Component {


    render() {
        return(
            <div className={styles.container}>
                <input type="text" placeholder="Username.."/>
                <input type="password" placeholder="Password.."/>
            </div>
        );
    }
}

export default Login;