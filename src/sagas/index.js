import { all } from 'redux-saga/effects';
import { getQuestions, getQuestionDetails, addQuestion } from './questions';

export default function* sagas() {
  yield all([
    getQuestions(),
    getQuestionDetails(),
    addQuestion(),
  ]);
};
