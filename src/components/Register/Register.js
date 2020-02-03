import React, { Component } from 'react';
import "./Register.module.css";

class Register extends Component {


    render() {
        return(
            <div className="container">
                <h1>Register Now</h1>
                <form>
                    <input type="email" placeholder="Your Email" />
                    <input type="text" placeholder="Your Full Name" />
                    <input type="text" placeholder="Phone Number" />
                    <input type="text" placeholder="Suburb" />
                    <input type="text" placeholder="State" />
                    <input type="text" placeholder="Country" />
                    <input type="text" placeholder="Website URL (optional)"/>
                    <textarea cols="30" rows="5" placeholder="Please tell us about yourself..."></textarea>
                    <input type="password" placeholder="Your Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <input type="hidden" name="admin" value="false"/>
                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}

export default Register;