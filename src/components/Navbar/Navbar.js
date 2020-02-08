import React, { Component } from 'react';
import styles from './Navbar.module.css';
import {  Link } from 'react-router-dom';
class Navbar extends Component {
    state = {
        loggedin: false
    }
    render() {
        return(
            <div className={styles.navwrapper}>
                <nav className={styles.mainnav}>
                    <p className={styles.brand}>&lt;Jnr/Hub&gt;</p>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {/* // If user is logged in */}
                        { this.props.loggedin
                        ?
                        <div className={styles.inline}>
                            <li><Link to="/jobboard">Job Board</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                        {/* // Else */}
                            <li><a href="#" className={styles.oddOneOut} to="/logout" onClick={() => this.props.onLogout()}>Logout</a></li>
                        </div>
                        :
                        <li><Link to="/register">Register</Link></li>
                        }
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navbar;
