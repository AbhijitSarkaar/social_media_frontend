import React, { Component } from 'react';
import TextInput from '../../shared/TextInput';
import styles from './index.module.css';

export default class LogIn extends Component {
	render() {
		return (
			<div className={styles.loginContainer}>
				<TextInput label={'Email'} />
				<TextInput label={'Password'} />
			</div>
		);
	}
}
