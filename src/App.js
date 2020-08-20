import React, {Component} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

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
        {
          this.state.users.map(user => <div>{user.first_name}</div>)
        }
      </div>
    ); 
  }
}

export default App;
