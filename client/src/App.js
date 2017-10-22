import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './routes/Home';
import Category from './routes/Category';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// const Topics = ({match}) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li><Link to={`${match.url}/rendering`}>
//         Rendering with React
//       </Link></li>
//       <li><Link to={`${match.url}/components`}>
//         Components
//       </Link></li>
//       <li><Link to={`${match.url}/props-v-state`}>
//         Props vs State
//       </Link></li>
//     </ul>

//     <Route path={`${match.url}/:topicId`} component={Topic} />
//     <Route exact path={match.url} render={() => (
//       <h3>Please select a topic</h3>
//     )}/>
//   </div>
// );

// const Topic = ({match}) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/category" component={Category} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
