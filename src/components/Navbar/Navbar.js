import React, { Component } from 'react';
import styles from './Navbar.module.css';

class Navbar extends Component {

    state = {
        loggedin: false
    }

    constructor(props) {
        super(props);
        this.state.loggedin = this.props.loggedin;
    }

    render() {
        return(
            <div className={styles.navwrapper}>
                { this.state.loggedin 
                ? 
                <nav className={styles.loggedinnav}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Jobs</a></li>
                        <li><a href="/">Portfolio</a></li>
                        <li><a href="/">Logout</a></li> 
                    </ul>
                </nav>
                : 
                <nav>
                    <ul>
                        <li>
                            <p className={styles.brand}>&lt;Jnr/Hub&gt;</p>
                        </li>
                    </ul>
                </nav> 
                }
            </div>
        )
    }

}

export default Navbar;