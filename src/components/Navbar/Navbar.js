import React, { Component } from 'react';
import styles from './Navbar.module.css';
import {Link, withRouter} from 'react-router-dom';

class Navbar extends Component {

    state = {
        loggedin: false
    }

    constructor(props) {
        super(props);
        this.state.loggedin = this.props.loggedin;
    }

    logoutHandler = () => {
        this.loggedin=false
        this.props.history.push('/');
    }

    render() {
        return(
<<<<<<< HEAD
            <div className={styles.navwrapper}>
                { this.state.loggedin
                ?
                <nav className={styles.loggedinnav}>
                    <p className={styles.brand}>&lt;Jnr/Hub&gt;</p>
                    <ul>
<<<<<<< HEAD
                        <li><a href="/">Dashboard</a></li>
                        <li><a href="/">Job Board</a></li>
                        <li><a href="/">Profile</a></li>
                        <li><a href="/">Logout</a></li>
                    </ul>
                </nav>
                :
                <nav>
                    <ul>
                        <li>

                        </li>
                    </ul>
                </nav>
                }
            </div>
        )
    }

}

<<<<<<< HEAD
export default Navbar;
=======
export default withRouter(Navbar);
>>>>>>> 355fd7ed684f90a18094f0e01bd29e8fc67b93d9
