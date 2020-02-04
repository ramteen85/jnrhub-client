import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import styles from  "./Register.module.css";
import axios from 'axios';

class Register extends Component {

    state = {
        submitted: false
    };

    jobseekerHandler = (e) => {
        this.setState({userType: "jobseeker"});
        console.log(e);
        console.log(this.state);
        axios.post('http://localhost:3000/users/register', {
            email: this.state.email,
            full_name: this.state.fullname,
            phone_no: this.state.phone,
            suburb: this.state.suburb,
            state: this.state.state,
            country: this.state.country,
            website: this.state.website,
            about: this.state.about,
            userType: this.state.userType,
            password: this.state.password,
            password_confirmation: this.state.confirm_password
        })
        .then(res => {
            console.log(res);
        });
    }

    employerHandler = (e) => {
        this.setState({userType: "employer"});
        console.log(e);
        console.log(this.state);
        axios.post('http://localhost:3000/users/register', {
            email: this.state.email,
            full_name: this.state.fullname,
            phone_no: this.state.phone,
            suburb: this.state.suburb,
            state: this.state.state,
            country: this.state.country,
            website: this.state.website,
            about: this.state.about,
            userType: this.state.userType,
            password: this.state.password,
            password_confirmation: this.state.confirm_password
        })
        .then(res => {
            console.log(res);
        });
    }

    inputChangeHandler = (event) => {
        event.preventDefault();
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        });

        let valid = true;
        const result = this.validateLive(valid, event);
        // save later to state
        valid = result;
    }

    validateLive = (valid, e) => {
        if(e.target.value === "") {
            this.setState({[e.target.name + 'Invalid']: styles.error});
            valid = false;
        } else {
            this.setState({[e.target.name + 'Invalid']: styles.normal});
        }

        return valid;
    }

    validate = (valid, e) => {
        if(e.target.email.value === "") {
            this.setState({emailInvalid: styles.error});
            valid = false;
        } else {
            this.setState({emailInvalid: styles.normal});
        }

        if(e.target.fullname.value === "") {
            this.setState({fullnameInvalid: styles.error});
            valid = false;
        } else {
            this.setState({fullnameInvalid: styles.normal});
        }

        if(e.target.phone.value === "") {
            this.setState({phoneInvalid: styles.error});
            valid = false;
        } else {
            this.setState({phoneInvalid: styles.normal});
        }

        if(e.target.suburb.value === "") {
            this.setState({suburbInvalid: styles.error});
            valid = false;
        } else {
            this.setState({suburbInvalid: styles.normal});
        }

        if(e.target.state.value === "") {
            this.setState({stateInvalid: styles.error});
            valid = false;
        } else {
            this.setState({stateInvalid: styles.normal});
        }

        if(e.target.country.value === "") {
            this.setState({ countryInvalid: styles.error });
            valid = false;
        } else {
            this.setState({ countryInvalid: styles.normal });
        }

        if(e.target.about.value === "") {
            this.setState({ aboutInvalid: styles.error });
            valid = false;
        } else {
            this.setState({ aboutInvalid: styles.normal });
        }

        if(e.target.password.value === "" || e.target.password.value !== e.target.confirm_password.value){
            this.setState({ passwordInvalid: styles.error });
            valid = false;
        } else {
            this.setState({ passwordInvalid: styles.normal });
        }

        if(e.target.confirm_password.value === "" || e.target.password.value !== e.target.confirm_password.value){
            this.setState({ confirmPasswordInvalid: styles.error });
            valid = false;
        } else {
            this.setState({ confirmPasswordInvalid: styles.normal });
        }

        return valid;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // console.log(e.target);

        let valid = true;

        const result = this.validate(valid, e);

        valid = result;

        if(valid) {
            // TODO:

            // move checktype component into this one
            // hide form, display options for jobseeker or employer (only upon registration)
            this.setState({submitted: true});
        }
    }

    render() {
        return(
            <div className="container">
                { this.state.submitted === false
                ?
                <div className={styles.regForm}>
                    <h1>Register Now</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.inputChangeHandler} type="email" placeholder="Your Email" name="email" id="email" className={this.state.emailInvalid} />
                        <input onChange={this.inputChangeHandler} type="text" placeholder="Your Full Name" name="fullname" id="fullname" className={this.state.fullnameInvalid} />
                        <input onChange={this.inputChangeHandler} type="text" placeholder="Phone Number" name="phone" id="phone" className={this.state.phoneInvalid} />
                        <input onChange={this.inputChangeHandler} type="text" placeholder="Suburb" name="suburb" id="suburb" className={this.state.suburbInvalid} />
                        <input onChange={this.inputChangeHandler} type="text" placeholder="State" name="state" id="state" className={this.state.stateInvalid} />
                        <input onChange={this.inputChangeHandler} type="text" placeholder="Country" name="country" id="country" className={this.state.countryInvalid} />
                        <input onChange={this.inputChangeHandler} type="text" placeholder="Website URL (optional)" name="website" id="website" />
                        <textarea onChange={this.inputChangeHandler} cols="30" rows="5" placeholder="Please tell us about yourself..." name="about" id="about" className={this.state.aboutInvalid}/>
                        <input onChange={this.inputChangeHandler} type="password" placeholder="Your Password" name="password" id="password" className={this.state.passwordInvalid} />
                        <input onChange={this.inputChangeHandler} type="password" placeholder="Confirm Password" name="confirm_password" id="confirm_password" className={this.state.confirmPasswordInvalid} />
                        <button type="submit">Register</button>
                    </form>
                </div>
                :
                <div>
                    <h2 className={styles.subtitle}>Are you:</h2>

                    <div className={styles.container}>
                        <div className={styles.employer} onClick={this.employerHandler}>
                            <label>An Employer</label>
                            <img src="/assets/img/boss.jpeg" alt="The big boss"/>
                        </div>
                        <div className={styles.jobseeker} onClick={this.jobseekerHandler}>
                            <label>A Job Seeker</label>
                            <img src="/assets/img/bludger.jpg" alt="dole bludging job seeker"/>

                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default withRouter(Register);
