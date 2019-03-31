import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import { loadQuestionDetails } from '../actions/questionDetails';
import Title from '../components/Title';

class QuestionDetails extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadQuestionDetails(id);
  }

  renderChoices() {
    return this.props.questionDetails.choices.map((choice) => {
      return (
        <ListItem key={choice.url}>
          <ListItemText primary={choice.choice} />
          <Chip label={choice.votes} />
        </ListItem>
      );
    });
  }

  render() {
    const { fetching, questionDetails } = this.props;

    if (fetching || !questionDetails) {
      return <CircularProgress />
    }

    return (
      <Paper>
        <Title title='Question Details' />
        <List>
          { this.renderChoices() }
        </List>
      </Paper>
    );
  }
};

const mapStateToProps = state => ({
  fetching: state.questionDetails.fetching,
  questionDetails: state.questionDetails.data,
});

const mapDispatchToProps = dispatch => ({
  loadQuestionDetails: (id) => dispatch(loadQuestionDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetails);
