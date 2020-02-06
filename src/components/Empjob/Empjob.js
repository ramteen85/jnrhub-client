import React, { Component } from 'react';
import styles from './Empjob.module.css';
import axios from 'axios'

class Empjob extends Component {

  state = {

  }

  render() {

    return(
      <div className={styles.container}>
          <h1>Junior Front End Developer at Google</h1><br/>
          <p><strong>Company:</strong><br/><br/>Google</p><br/><hr/><br/>
          <p><strong>Role:</strong> <br/><br/>Junior Front End Developer</p><br/><hr/><br/>
          <p><strong>Location:</strong><br/><br/> Sydney</p><br/><hr/><br/>
          <p><strong>Salary:</strong><br/><br/> $10,000</p><br/><hr/><br/>
          <p><strong>Job Description:</strong><br/><br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum, ex vel elementum hendrerit, nulla erat tincidunt ex, at tincidunt odio risus id ipsum. Aliquam consectetur imperdiet magna, maximus dapibus magna laoreet non. Sed aliquam sem vitae faucibus ultrices. Nam maximus eros vitae ligula hendrerit, non eleifend enim ultricies. Praesent sem diam, ultrices in placerat sit amet, aliquet vitae sapien. Morbi cursus volutpat maximus. Vestibulum sed sapien venenatis, commodo justo et, varius massa. Nam risus diam, volutpat sit amet augue sodales, tincidunt consectetur lacus. Mauris tempus commodo sodales. Donec et hendrerit massa. Proin et ligula lobortis, eleifend ante vel, ultrices purus.</p>
          <br/><hr/><hr/><br/>
          <p>Current Applicants: <span>59</span></p>
          <div className={styles.apply}>
          <a href="#/destroyJobPath">Position Filled</a>
          </div>
        </div>

    )
  }

}

export default Empjob;
