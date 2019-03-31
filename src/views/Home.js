import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';

import { withStyles } from '@material-ui/core/styles';

import { loadQuestions } from '../actions/questionActions';
import { storeQuestionLocally } from '../actions/addQuestions';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { question: this.props.question || '' };
    this.addQuestion = this.addQuestion.bind(this);
    this.onQuestionChange = this.onQuestionChange.bind(this);
  }

  componentDidMount() {
    this.props.loadQuestions();
  }

  renderQuestions() {
    return this.props.questions.map((question) => {
      return (
        <Link to={question.url} key={question.url}>
          <ListItem button>
            <ListItemText
              primary={question.question}
            />
            <Chip label={dayjs(question.published_at).format('DD-MM-YYYY')} />
          </ListItem>
        </Link>
      );
    });
  }

  addQuestion() {
    this.props.addQuestionLocally(this.state.question);
    this.props.history.push('/add');
  }

  onQuestionChange(e) {
    this.setState({
      question: e.target.value,
    });
  }

  render() {
    const { classes, fetching } = this.props;
    const { question } =  this.state;

    if (fetching) {
      return <CircularProgress className={classes.progress} />
    }

    return (
      <Paper className={classes.root}>
        <TextField
          id="standard-full-width"
          label="Question"
          style={{ margin: 8 }}
          placeholder="Add a Question"
          fullWidth
          margin="normal"
          value={question}
          onChange={this.onQuestionChange}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{ endAdornment:
            <Button variant="contained" color="secondary" onClick={this.addQuestion}>
              Add
            </Button>
          }}
        />
        <List component="nav">
          { this.renderQuestions() }
        </List>
      </Paper>
    );
  }
};

const mapStateToProps = state => ({
  fetching: state.questions.fetching,
  questions: state.questions.data,
  question: state.addQuestion.question,
});

const mapDispatchToProps = dispatch => ({
  loadQuestions: () => dispatch(loadQuestions()),
  addQuestionLocally: (question) => dispatch(storeQuestionLocally(question)),
});


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));
