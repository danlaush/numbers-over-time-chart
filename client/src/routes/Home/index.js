import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  state = {users: []}

  componentDidMount() {
    // why fetch in cDM?
    // https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="Home">        
        <h2>Welcome to Numbers Over Time*</h2>
        <p>Track your shit</p>
        <h2>About</h2>
        <p>This is an app I built to get better at React. And maybe use occasionally. Details in the <a href="https://github.com/danlaush/numbers-over-time-chart">README</a>.</p>
        <p><em>*Name not final</em></p>
      </div>
    );
  }
}

export default Home;
