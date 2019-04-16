import { spawn } from 'redux-saga/effects';
import { getQuestions, getQuestionDetails, addQuestion } from './questions';

export default function* sagas() {
  yield spawn(getQuestions);
  yield spawn(getQuestionDetails);
  yield spawn(addQuestion);
};
