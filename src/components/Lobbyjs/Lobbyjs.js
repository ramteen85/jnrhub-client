import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Lobbyhome from './Lobbyhome/Lobbyhome';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

class Lobbyjs extends Component {

    state = {

    }

    render() {
        return(
            <BrowserRouter>
                <div>
                    <Navbar loggedin={true} />
                    <Switch>
                        <Route path="/jobseeker" exact component={Lobbyhome} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }

}

export default Lobbyjs;