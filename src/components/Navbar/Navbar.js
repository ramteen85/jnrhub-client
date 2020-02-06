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
<<<<<<< HEAD
                        { this.props.loggedin
                        ?
                        <div className={styles.inline}>
                            <li><Link to="/">Job Board</Link></li>
                            <li><a className={styles.oddOneOut} to="/logout" onClick={ this.props.onLogout }>Logout</a></li>
=======
                        { this.state.loggedin
                        ?
                        <div className={styles.inline}>
                            <li><Link to="/">Job Board</Link></li>
                            <li><Link to="/logout" onClick={() => this.setState({ loggedin: false })}>Logout</Link></li>
>>>>>>> 3e55cc7b8bc507073c28b202231170a003cc03ed
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