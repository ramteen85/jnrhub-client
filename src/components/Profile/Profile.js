import React, { Component } from 'react';
import axios from 'axios';
import styles from '../Profile/Profile.module.css';
// import styles from './Profile.module.css'

class Profile extends Component {

  state = {
    // for keeping track of inline editing:
    editing: {
      name: false
    },
    profile: {
      jobs: [] // prevent map() undefined error on initial render
    }
  }

  componentDidMount() {
    const token = `Bearer ${localStorage.getItem("jwt")}`;
    axios.get('http://localhost:3000/users/profile', {
      headers: {
          "Authorization": token
      }
    })
    .then(res => {
      console.log(res.data );
      this.setState({ profile: res.data });

    })
    .catch(err => {
      console.log("error",err);
    });


  }//componentDidMount

    editName = () => {
      console.log('editing!');
      this.setState({ editing: { name: true} });
    }

    updateName = (event) => {
      console.log(event.target.value);
      if(event.key === "Enter"){
        console.log('SUBMIT!', this.state.profile.id);

      }
    }

    render() {
        return(
            <div>

          <h1>Profile</h1>

          <div className={styles.profileStyle}>
          <p className={styles.profileItem}>Full name:
            {
              this.state.editing.name
              ?
              <input type="text"
                defaultValue={this.state.profile.full_name}
                onKeyDown={ this.updateName }
              />
              :
              <span>
                { this.state.profile.full_name }
                <img onClick={ this.editName } src="/assets/img/edit-icon.png" className={styles.edit} />
              </span>
            }


          </p>
          <p className={styles.profileItem}>Email: { this.state.profile.email } </p>
          <p className={styles.profileItem}>Phone number: { this.state.profile.phone_no } </p>
          <p className={styles.profileItem}>Suburb: { this.state.profile.suburb } </p>
          <p className={styles.profileItem}>State: { this.state.profile.state} </p>
          <p className={styles.profileItem}>Website: { this.state.profile.website} </p>
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
