import { takeLatest } from 'redux-saga/effects';
import { QUESTIONS, QUESTIONS_DETAILS, ADD_QUESTION } from '../constants';
import { getQuestions, getQuestionDetails, addQuestion } from './questions';

export default function* sagas() {
  yield takeLatest(QUESTIONS.LOAD, getQuestions);
  yield takeLatest(QUESTIONS_DETAILS.LOAD, getQuestionDetails);
  yield takeLatest(ADD_QUESTION.LOAD, addQuestion);
};
