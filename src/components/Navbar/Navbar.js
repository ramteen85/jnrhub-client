import React, { Component } from 'react';
import './Navbar.module.css';

class Navbar extends Component {

    state = {
        loggedin: false
    }

    render() {
        return(
            <div>
                { this.state.loggedin 
                ? 
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                            <a href="/">Jobs</a>
                            <a href="/">Portfolio</a>
                        </li>
                    </ul>
                </nav>
                : 
                <nav>
                <ul>
                    <li>
                        <p>JnrHub</p>
                    </li>
                </ul>
            </nav> 
                }
            </div>
        )
    }

}

export default Navbar;