import React, { Component } from 'react';
import TextInput from '../../shared/TextInput';
import styles from './index.module.css';

export default class UserProfile extends Component {
	render() {
		return (
			<div className={styles.profileContainer}>
				<div className={styles.profileHeaderText}>User Name</div>
				<div className={styles.profileContainerFields}>
					<div className={styles.textField}>First Name</div>
					<TextInput label={'First Name'} />
				</div>
				<div className={styles.profileContainerFields}>
					<div className={styles.textField}>Last Name</div>
					<TextInput label={'Last Name'} />
				</div>
			</div>
		);
	}
}
