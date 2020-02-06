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
                        { this.state.loggedin
                        ?
                        <div className={styles.inline}>
                            <li><Link to="/">Job Board</Link></li>
                            <li><Link to="/logout" onClick={() => this.setState({ loggedin: false })}>Logout</Link></li>
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
