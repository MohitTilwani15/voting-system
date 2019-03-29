import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import asyncComponent from './AsyncComponent';

const Home = asyncComponent(() => import('../views/Home'));
const QuestionDetails = asyncComponent(() => import('../views/QuestionDetails'));
const AddNewQuestion = asyncComponent(() => import('../views/AddNewQuestion'));

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/questions/:id" component={QuestionDetails} />
        <Route path="/add" component={AddNewQuestion} />
      </Router>
    );
  }
};


export default App;
