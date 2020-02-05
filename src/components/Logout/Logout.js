import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

class Logout extends Component {

    render() {

        // wipe token and redirect to homepage
        localStorage.removeItem("jwt");

        return(
            <div>
                <Redirect to="/" />
            </div>
        );
    }


}

export default withRouter(Logout);