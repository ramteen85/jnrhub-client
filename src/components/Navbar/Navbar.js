import React, { Component } from 'react';
import styles from './Navbar.module.css';
import {  Link } from 'react-router-dom';
class Navbar extends Component {
    state = {
        loggedin: this.props.loggedin
    }

    render() {
        return(
            <div className={styles.navwrapper}>
                <nav className={styles.mainnav}>
                    <p className={styles.brand}>&lt;Jnr/Hub&gt;</p>
                    <ul>
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/">Job Board</Link></li>
                        <li><Link to="/">Profile</Link></li>
                        <li><Link to="/logout" onClick={this.props.Logout}>Logout</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navbar;
