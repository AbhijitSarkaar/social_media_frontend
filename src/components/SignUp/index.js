import React, { Component } from 'react';
import TextInput from '../../shared/TextInput';
import styles from './index.module.css';

export default class LogIn extends Component {
	render() {
		return (
			<div className={styles.loginContainer}>
				<div className={styles.logInHeaderText}>Sign Up</div>
				<div className={styles.logInContainerFields}>
					<div className={styles.textField}>First Name</div>
					<TextInput label={'First Name'} />
				</div>
				<div className={styles.logInContainerFields}>
					<div className={styles.textField}>Last Name</div>
					<TextInput label={'Last Name'} />
				</div>
				<div className={styles.logInContainerFields}>
					<div className={styles.textField}>Email</div>
					<TextInput label={'Email'} />
				</div>
				<div className={styles.logInContainerFields}>
					<div className={styles.textField}>Password</div>
					<TextInput label={'Password'} />
				</div>
			</div>
		);
	}
}
