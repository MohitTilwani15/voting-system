import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../views/Home';
import QuestionDetails from '../views/QuestionDetails';
import AddNewQuestion from '../views/AddNewQuestion';

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
