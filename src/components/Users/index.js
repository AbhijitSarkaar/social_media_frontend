import React, { Component } from 'react';
import User from './User';
import axios from 'axios';
import './index.scss';

export default class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
		};
	}
	componentDidMount() {
		axios('http://localhost:5000/users').then((res) => {
			this.setState({
				users: res.data,
			});
		});
	}
	render() {
		return (
			<div className='users-container'>
				<div className='users-table-header'>
					<div>Id</div>
					<div>First Name</div>
					<div>Last name</div>
				</div>
				{this.state.users.map((user) => (
					<User user={user} />
				))}
			</div>
		);
	}
}
