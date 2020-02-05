import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Emphome from './Emphome/Emphome';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

class Lobbyemp extends Component {

    state = {

    }

    render() {
        return(
            <BrowserRouter>
                <div>
                    <Navbar loggedin={true} />
                    <Switch>
                        <Route path="/employer" exact component={Emphome} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }

}

export default Lobbyemp;