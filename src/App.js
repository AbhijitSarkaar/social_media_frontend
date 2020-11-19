import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Users from './components/Users';
import UserProfile from './components/UserProfile';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Error from './components/Error';
import './App.scss';
class App extends Component {
	render() {
		return (
			<div className='App'>
				<div className='header'>
					<p className='header-text'>Social Media</p>
				</div>
				<Switch>
					<Route path='/signup' component={SignUp} />
					<Route path='/login' component={LogIn} />
					<Route path='/user/:id' component={UserProfile} />
					<Route path='/users' component={Users} />
					<Route component={Error} />
				</Switch>
			</div>
		);
	}
}

export default App;
