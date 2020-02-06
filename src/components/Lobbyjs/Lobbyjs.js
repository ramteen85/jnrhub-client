import React, { Component } from 'react';

class Lobbyjs extends Component {

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
                This is the job seekers home page
            </div>
        );
    }

}

export default Lobbyjs;