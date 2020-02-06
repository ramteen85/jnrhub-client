import React, { Component } from 'react';

class Lobbyemp extends Component {

    state = {

    }

    constructor(props) {
        super(props);
        if(!localStorage.getItem("jwt")) {
            this.props.history.push("/");
        }
    }

    render() {
        return(
            <div>
                <br/>
                This is the employers home page
            </div>
        );
    }

}

export default Lobbyemp;