import React from 'react';
import styles from './Usertype.module.css';

function Usertype(props) {
    return(
        <div>
            <h2 className={styles.subtitle}>Are you:</h2>

            <div className={styles.container}>
                <div className={styles.employer}>
                    <label>An Employer</label>
                    <img src="/assets/img/boss.jpeg" alt="The big boss"/>
                </div>
                <div className={styles.jobseeker}>
                    <label>A Job Seeker</label>
                    <img src="" alt=""/>
                    
                </div>
            </div>
        </div>
    );

};

export default Usertype;