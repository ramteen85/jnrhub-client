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
                <nav className={styles.loggedinnav}>
                    <p className={styles.brand}>&lt;Jnr/Hub&gt;</p>
                    <ul>
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/">Job Board</Link></li>
                        { this.state.loggedin
                        ?
                        <li><Link to="/logout">Logout</Link></li>
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
