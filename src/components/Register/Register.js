import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import styles from  "./Register.module.css";
import axios from 'axios';

class Register extends Component {

    state = {
        submitted: false,
        emailError: styles.errorMsg,
        emailInvalid: "",
        fullnameInvalid: "",
        phoneInvalid: "",
        suburbInvalid:"",
        stateInvalid:"",
        countryInvalid:"",
        aboutInvalid: "",
        passwordInvalid:""

    };

    memberHandler = (e, userPath) => {
        console.log(e);
        console.log(this.state);


        axios.post('http://localhost:3000/users', {
            user: {
                email: this.state.email,
                full_name: this.state.fullname,
                phone_no: this.state.phone,
                suburb: this.state.suburb,
                state: this.state.state,
                country: this.state.country,
                website: this.state.website,
                about: this.state.about,
                user_type: "employer",
                admin: false,
                password: this.state.password,
                password_confirmation: this.state.confirm_password
            }
        })
        .then(res => {
            console.log(res);
            // account created successfully!
            // TODO: perform login for new account, using knock route
            // todo: redirect to employers page
            // this.props.history.push(`/employer`);

            axios.post('http://localhost:3000/user_token', {
            auth: {
                email: this.state.email,
                password: this.state.password
            }})
            .then(res => {
                // save token
                console.log("token: " + res);
                localStorage.setItem("jwt", res.data.jwt);
                this.props.onLogin(true);

                // redirect
                this.props.history.push(`/${userPath}`);
            })
            .catch(err => {
                // could not get token
                console.log(err);
            });

        })
        .catch(err => {
            // could not create user
            console.log(err);
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
            this.setState({emailError: styles.errorMsg});
            valid = false;
        } else {
            this.setState({emailInvalid: styles.normal});
            this.setState({emailError: styles.hidden});

        }

        if(e.target.fullname.value === "") {
            this.setState({fullnameInvalid: styles.error});
            this.setState({fullnameError: styles.errorMsg});
            valid = false;
        } else {
            this.setState({fullnameInvalid: styles.normal});
            this.setState({fullnameError: styles.hidden});


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
                        { this.state.emailInvalid.startsWith("Register_error")
                        ?
                        <label className={this.state.emailError}>Please enter your email</label>
                        :
                        ""
                        }
                        <input onChange={this.inputChangeHandler} type="text" placeholder="Your Full Name" name="fullname" id="fullname" className={this.state.fullnameInvalid} />
                        { this.state.fullnameInvalid.startsWith("Register_error")
                        ?
                        <label className={styles.errorMsg}>Please enter your name</label>
                        :
                        ""
                        }
                        <input onChange={this.inputChangeHandler} type="text" placeholder="Phone Number" name="phone" id="phone" className={this.state.phoneInvalid} />
                        { this.state.phoneInvalid.startsWith("Register_error")
                        ?
                        <label className={styles.errorMsg}>Please enter your number</label>
                        :
                        ""
                        }

                        <input onChange={this.inputChangeHandler} type="text" placeholder="Suburb"
                          name="suburb" id="suburb" className={this.state.suburbInvalid} />
                        { this.state.suburbInvalid.startsWith("Register_error")
                          ?
                          <label className={styles.errorMsg}>Please enter your suburb</label>
                          :
                          ""
                        }

                        <input onChange={this.inputChangeHandler} type="text" placeholder="State"
                          name="state" id="state" className={this.state.stateInvalid} />
                        { this.state.stateInvalid.startsWith("Register_error")
                          ?
                          <label className={styles.errorMsg}>Please enter your state</label>
                          :
                          ""
                        }
                        <input onChange={this.inputChangeHandler} type="text" placeholder="Country" name="country" id="country" className={this.state.countryInvalid} />
                          { this.state.countryInvalid.startsWith("Register_error")
                          ?
                          <label className={styles.errorMsg}>Please enter your Country</label>
                          :
                          ""
                        }

                        <input onChange={this.inputChangeHandler} type="text" placeholder="Website URL (optional)" name="website" id="website" />
                        <textarea onChange={this.inputChangeHandler} cols="30" rows="5" placeholder="Please tell us about yourself..." name="about" id="about" className={this.state.aboutInvalid}/>
                        { this.state.aboutInvalid.startsWith("Register_error")
                          ?
                          <label className={styles.errorMsg}>Please enter your about information!</label>
                          :
                          ""
                        }
                        <input onChange={this.inputChangeHandler} type="password" placeholder="Your Password" name="password" id="password" className={this.state.passwordInvalid} />
                        { this.state.passwordInvalid.startsWith("Register_error")
                          ?
                          <label className={styles.errorMsg}>Please enter a valid password</label>
                          :
                          ""
                        }


                        <input onChange={this.inputChangeHandler} type="password" placeholder="Confirm Password"
                          name="confirm_password" id="confirm_password" className={this.state.confirmPasswordInvalid} />
                        { this.state.password !== this.state.confirm_password && this.state.password && this.state.confirm_password
                        ?
                        <label className={styles.errorMsg}>Passwords must match!</label>
                        :
                        ""
                        }

                        <button type="submit">Register</button>
                      </form>
                    </div>
                    :
                    <div>
                      <h2 className={styles.subtitle}>Are you:</h2>

                      <div className={styles.container}>
                        <div className={styles.employer} onClick={(e) => this.memberHandler(e, "employer")}>
                          <label>An Employer</label>
                          <img src="/assets/img/boss.jpeg" alt="The big boss"/>
                        </div>
                        <div className={styles.jobseeker} onClick={(e) => this.memberHandler(e, "jobseeker")}>
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
