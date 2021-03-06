import React, { Component } from 'react';
import axios from 'axios';
import styles from '../Profile/Profile.module.css';
// import styles from './Profile.module.css'

class Profile extends Component {

  state = {
    // for keeping track of inline editing:
    editing: {
      full_name: false,
      full_nameError: [],
      phone_no: false,
      phone_noError: [],
      suburb: false,
      suburb_error: [],
      state: false,
      state_error: [],
      website: false,
      website_error: []
    },
    profile: {
      jobs: [] // prevent map() undefined error on initial render
    }
  }

  componentDidMount() {
    let url = '';
    if (process.env.NODE_ENV !== 'production') {
     url = `http://localhost:3000/users/profile`;
    } else {
     url = `https://whispering-chamber-55079.herokuapp.com/users/profile`;
    }
    console.log("token");
    console.log(localStorage.getItem("jwt"));
    axios.post(url, {
        "token": localStorage.getItem("jwt")
    })
    .then(res => {
      console.log(res.data );
      this.setState({ profile: res.data });

    })
    .catch(err => {
      console.log("error",err);
    });


  }

  editField = (event) => {
    console.log('editing!', event.target.name);
    this.setState({ editing: { [event.target.name]: true} });
  }


    updateField = (event) => {
      console.log(event.target.value);

      // The name="xxxx" field in the input is used here to determine
      // everything about this update: the key name that gets sent to
      // Rails, the keys we update with setState, etc
      const fieldName = event.target.name;

      if(event.key === "Enter"){

        //send axios request with user
        const token = localStorage.getItem("jwt");

        // let url = '';
        // if (process.env.NODE_ENV !== 'production') {
        //   url = 'http://localhost:3000/messages.json';
        // } else {
        //   url = 'https://visualpedia-backend.herokuapp.com/messages.json';
        let url = '';
        if (process.env.NODE_ENV !== 'production') {
         url = `http://localhost:3000/users/update`;
        } else {
         url = `https://whispering-chamber-55079.herokuapp.com/users/update`;
        }
        axios.post(url,{
            user: {
              [fieldName]: event.target.value
            },
            token: token
        })
        .then(response => {

          console.log(response.data);

          if( response.data.error ){
            // There was an error, so don't update the profile state
            this.setState({
              editing: {
                ...this.state.editing, // don't lose other editing keys
                [fieldName]: false,
                [fieldName + 'Error']: response.data.error
              }
            });
          } else {
            // Success!
            this.setState({
              profile: {
                ...this.state.profile, // don't erase what's already in the profile
                [fieldName]: response.data.user[fieldName]
              },
              editing: { [fieldName]: false }  // No longer editing name, don't show edit field
            });
          } // else

        })
        .catch(err => {
          console.log("error",err);
        });

        console.log('SUBMIT!', this.state.profile.id);

      } // if enter pressed
    }

    render() {
        return(
          <div>

            <h1>Profile</h1>

            <div className={styles.profileStyle}>


            <p className={styles.profileItem}>Full name:&nbsp;
              {
                this.state.editing.full_name
                ?
                <input type="text" name="full_name"
                  defaultValue={this.state.profile.full_name}
                  onKeyDown={ this.updateField }
                />
                :
                <span>
                  { this.state.profile.full_name }
                  <img onClick={ this.editField } name="full_name" src="/jnrhub-client/assets/img/edit-icon.png" className={styles.edit} />
                </span>
              }
            </p>


            <p className={styles.profileItem}>Phone Number:&nbsp;
              {
                this.state.editing.phone_no
                ?
                <input type="text" name="phone_no"
                  defaultValue={this.state.profile.phone_no}
                  onKeyDown={ this.updateField }
                  />
                :
                <span>
                  { this.state.profile.phone_no }
                  <img onClick={ this.editField } name="phone_no"
                    src="/jnrhub-client/assets/img/edit-icon.png" className={styles.edit} />
                </span>
              }
            </p>
            <p className={styles.profileItem}>Email: { this.state.profile.email} </p>
            <p className={styles.profileItem}>
              {
                this.state.editing.suburb
                ?
                <input type="text" name="suburb"
                  defaultValue={this.state.profile.suburb}
                  onKeyDown={ this.updateField }
                />
                :
                <span>
                  { this.state.profile.suburb }
                  <img onClick={ this.editField } name="suburb"
                    src="/jnrhub-client/assets/img/edit-icon.png" className={styles.edit} />
                </span>
              }
            </p>
            <p className={styles.profileItem}>
              {
                this.state.editing.state
                ?
                <input type="text" name="state"
                  defaultValue={this.state.profile.state}
                  onKeyDown={ this.updateField }
                />
                :
                <span>
                  { this.state.profile.state }
                  <img onClick={ this.editField } name="state"
                    src="/jnrhub-client/assets/img/edit-icon.png" className={styles.edit} />
                </span>
              }
            </p>
            <p className={styles.profileItem}>
              {
                this.state.editing.website
                ?
                <input type="text" name="website"
                  defaultValue={this.state.profile.website}
                  onKeyDown={ this.updateField }
                />
                :
                <span>
                  { this.state.profile.website }
                  <img onClick={ this.editField } name="website"
                    src="/jnrhub-client/assets/img/edit-icon.png" className={styles.edit} />
                </span>
              }
            </p>
            <p className={styles.profileItem}>Account Type: { this.state.profile.user_type} </p>
            <br/>
            <br/>
            <br/>
          </div>
      </div>
        );
    }


}

export default Profile;
