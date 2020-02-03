import React, { Component } from 'react';
import "./Register.module.css";

class Register extends Component {


    inputChangeHandler(event) {
        event.preventDefault();
        console.log(event);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        // console.log(e.target);

        if(e.target.email.value === "") {
            document.querySelector('#email').style.border = "2px solid red";
        } else {
            document.querySelector('#email').style.border = "1px solid rgb(238, 238, 238)";
        }

        if(e.target.fullname.value === "") {
            document.querySelector('#fullname').style.border = "2px solid red";
        } else {
            document.querySelector('#fullname').style.border = "1px solid rgb(238, 238, 238)";
        }

        if(e.target.phone.value === "") {
            document.querySelector('#phone').style.border = "2px solid red";
        } else {
            document.querySelector('#phone').style.border = "1px solid rgb(238, 238, 238)";
        }

        if(e.target.suburb.value === "") {
            document.querySelector('#suburb').style.border = "2px solid red";
        } else {
            document.querySelector('#suburb').style.border = "1px solid rgb(238, 238, 238)";
        }

        if(e.target.state.value === "") {
            document.querySelector('#state').style.border = "2px solid red";
        } else {
            document.querySelector('#state').style.border = "1px solid rgb(238, 238, 238)";
        }

        if(e.target.country.value === "") {
            document.querySelector('#country').style.border = "2px solid red";
        } else {
            document.querySelector('#country').style.border = "1px solid rgb(238, 238, 238)";
        }

        if(e.target.about.value === "") {
            document.querySelector('#about').style.border = "2px solid red";
        } else {
            document.querySelector('#about').style.border = "1px solid rgb(238, 238, 238)";
        }

        if(e.target.password.value === "" || e.target.password.value !== e.target.confirm_password.value){
            document.querySelector('#password').style.border = "2px solid red";
        } else {
            document.querySelector('#password').style.border = "1px solid rgb(238, 238, 238)";
        }

        if(e.target.confirm_password.value === "" || e.target.password.value !== e.target.confirm_password.value){
            document.querySelector('#confirm_password').style.border = "2px solid red";
        } else {
            document.querySelector('#comfirm_password').style.border = "1px solid rgb(238, 238, 238)";
        }
    }

    render() {
        return(
            <div className="container">
                <h1>Register Now</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" placeholder="Your Email" name="email" id="email" />
                    <input type="text" placeholder="Your Full Name" name="fullname" id="fullname" />
                    <input type="text" placeholder="Phone Number" name="phone" id="phone" />
                    <input type="text" placeholder="Suburb" name="suburb" id="suburb" />
                    <input type="text" placeholder="State" name="state" id="state" />
                    <input type="text" placeholder="Country" name="country" id="country" />
                    <input type="text" placeholder="Website URL (optional)" name="website" id="website" />
                    <textarea cols="30" rows="5" placeholder="Please tell us about yourself..." name="about" id="about"/>
                    <input type="password" placeholder="Your Password" name="password" id="password" />
                    <input type="password" placeholder="Confirm Password" name="confirm_password" id="confirm_password" />
                    <input type="hidden" name="admin" id="admin" value="false"/>
                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}

export default Register;
