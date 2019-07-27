import React, { Component } from 'react';
import axios from 'axios';
import Info from './components/Info';
import Form from './components/Form';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      login    : null,
      name     : null,
      repos    : null,
      followers : null
  }
  this.getUser = this.getUser.bind(this)
  }
  
  getUser(e) {
    e.preventDefault();
    const user = e.target.elements.username.value;
    axios.get(`https://api.github.com/users/${user}`)
      .then(res => {
        console.log(res);
        const name  = res.data.name;
        const login = res.data.login;
        const repos = res.data.public_repos;
        const followers = res.data.followers
        this.setState({
          login,
          name,
          repos,
          followers
        })
      })

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Axios App</h1>
          <Form getUser={this.getUser} />
          <Info 
            repos={this.state.repos}
            login={this.state.login}
            name ={this.state.name}
            followers = {this.state.followers}
          />
        </header>
      </div>
    );
  }
}

export default App;
