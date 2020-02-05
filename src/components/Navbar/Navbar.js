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
            <div>
                { this.state.loggedin === true
                ?
                <nav className={styles.loggedinnav}>
                    <p className={styles.brand}>&lt;Jnr/Hub&gt;</p>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Jobs</Link></li>
                        <li><Link to="/">Portfolio</Link></li>
                        <li><Link to="/">Logout</Link></li>
                    </ul>
                </nav>
                :
                <nav className={styles.loggedoutnav}>
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
export default withRouter(Navbar);
