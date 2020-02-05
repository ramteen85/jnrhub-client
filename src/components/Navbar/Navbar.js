import React, { Component } from 'react';
import styles from './Navbar.module.css';
import {Link, withRouter} from 'react-router-dom';

class Navbar extends Component {

    state = {
    }

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={styles.navwrapper}>
                <nav className={styles.loggedinnav}>
                    <p className={styles.brand}>&lt;Jnr/Hub&gt;</p>
                    <ul>
                        <li><a href="/">Dashboard</a></li>
                        <li><a href="/">Job Board</a></li>
                        <li><a href="/">Profile</a></li>
                        <li><a href="/">Logout</a></li>
                    </ul>
                </nav>
            </div>
        )
    }

}

export default withRouter(Navbar);
