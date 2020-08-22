import React, {Component} from 'react';
import axios from 'axios';
import './App.scss';

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
        {
          this.state.users.map(user => <div>{user.first_name}</div>)
        }
      </div>
    ); 
  }
}

export default App;
