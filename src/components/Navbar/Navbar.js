import React, { Component } from 'react';
import styles from './Navbar.module.css';
import {  Link } from 'react-router-dom';
class Navbar extends Component {
    // state = {
    //     loggedin: true
    // }

    handleLogout = () => {
        this.props.onLogout();
        this.props.history.push( '/' );
    }

    render() {
        return(
            <div className={styles.navwrapper}>
                <nav className={styles.mainnav}>
                    <p className={styles.brand}>&lt;Jnr/Hub&gt;</p>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        { this.props.loggedin
                        ?   
                        <div className={styles.inline}>
                            <li><Link to="/">Job Board</Link></li>
                            <li><button className={styles.oddOneOut} onClick={ this.handleLogout }>Logout</button></li>
                        </div>
                        :
                        <li><Link to="/register">Register</Link></li>
                        //  onClick={() => this.setState({ loggedin: false })}
                        }
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navbar;
