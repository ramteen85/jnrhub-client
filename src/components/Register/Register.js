import React, { Component } from 'react';
import "./Register.module.css";

class Register extends Component {


    inputChangeHandler(event) {
        event.preventDefault();
        console.log(event);
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('the target is:');
        
        console.log(e.target);
        console.log(e.target.suburb);
        console.log(`the suburb is: ${e.target.suburb.value}`);
        document.querySelector('#suburb').style.border = "2px solid red";


        
    }

    render() {
        return(
            <div className="container">
                <h1>Register Now</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" placeholder="Your Email" onChange={this.inputChangeHandler} name="email" id="email" />
                    <input type="text" placeholder="Your Full Name" name="fullname" />
                    <input type="text" placeholder="Phone Number" />
                    <input type="text" placeholder="Suburb" name="suburb" id="suburb" />
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