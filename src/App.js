import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { BrowserRouter as Router, Route, Switch } from "react-router";



class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        id: '',
        blogName: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
      this.setState({ id: event.target.value });
    }

    handleSubmit(event){
      event.preventDefault();
      fetch(`/api/blogs?id=${encodeURIComponent(this.state.id)}`)
        .then(response => response.json())
        .then(state => this.setState(state));
      }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Welcome to Caffeine Corner!
          </h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            We welcome you with open arms and full cups!
          </h2>
          <a
            className="App-link"
            href="http://twitch.tv/timmythegamertv"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch timmythegamertv Live!
          </a>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Enter the ID of the content you want to see: </label>
            <input
              id="id"
              type="text"
              value={this.state.id}
              onChange={this.handleChange}
              />
              <button type="submit">Submit</button>
            </form>
          <p>{this.state.blogName}</p>
        </header>
      </div>
    );
  }
}

export default App;
