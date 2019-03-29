import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { addQuestion } from '../actions/addQuestions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class AddNewQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = { choices: [], choiceText: '' };
    this.onChoiceInputChange = this.onChoiceInputChange.bind(this);
    this.onAddChoiceButtonClick = this.onAddChoiceButtonClick.bind(this);
    this.submitChoices = this.submitChoices.bind(this);
  }

  onChoiceInputChange(e) {
    this.setState({
      choiceText: e.target.value,
    });
  }

  onAddChoiceButtonClick() {
    this.setState((state, props) => {
      const choices = [...state.choices, state.choiceText];

      return {
        choices,
        choiceText: '',
      }
    });
  }

  submitChoices() {
    const { question, addQuestion, history } = this.props;
    const { choices } = this.state;
    const data = {
      question,
      choices,
    };

    addQuestion({data, history});
  }

  renderChoices() {
    return this.state.choices.map((choice, i) => {
      return (
        <ListItem key={choice + i}>
          <ListItemText>
            {choice}
          </ListItemText>
        </ListItem>
      );
    });
  }

  render() {
    const { classes, question, history } = this.props;
    const { choiceText } = this.state;

    if (!question) {
      history.push('/');
    }

    return (
      <Paper className={classes.root}>
        <Typography variant="h5" component="h2">{question}</Typography>
        <TextField
          id="standard-full-width"
          label="Choice"
          value={choiceText}
          style={{ margin: 8 }}
          placeholder="Add Choice"
          fullWidth
          margin="normal"
          onChange={this.onChoiceInputChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <List>
          { this.renderChoices() }
        </List>
        <Button variant="contained" color="secondary" onClick={this.onAddChoiceButtonClick}>
            Add
        </Button>
        <Button variant="contained" color="primary" onClick={this.submitChoices}>
            Send
        </Button>
      </Paper>
    );
  }
};

const mapStateToProps = state => ({
  question: state.addQuestion.question,
});

const mapDispatchToProps = dispatch => ({
  addQuestion: ({data, history}) => dispatch(addQuestion({data, history})),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddNewQuestion));