import React, {Component} from 'react';
import axios from 'axios';
import './App.scss';
import Users from './Users';
import SideBar from './SideBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios('http://localhost:5000/users')
    .then(res => {
      this.setState({
        users: res.data
      })
    })
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <p className="header-text">
            Social Media
          </p>
        </div>
        <div className="body-container">
          <SideBar />
          <Users 
            users={this.state.users}
          />
        </div>
      </div>
    ); 
  }
}

export default App;
