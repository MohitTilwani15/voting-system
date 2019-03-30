import { call, put, take } from 'redux-saga/effects';
import http from '../services/http';
import { setQuestions, setError } from '../actions/questionActions';
import { setQuestionDetails, setQuestionDetailsError } from '../actions/questionDetails';
import { addQuestionSuccess, addQuestionError } from '../actions/addQuestions';
import { QUESTIONS, QUESTIONS_DETAILS, ADD_QUESTION } from '../constants';

function fetchQuestionsRequest() {
  return http.get('questions');
};

function fetchQuestionDetailsRequest(id) {
  return http.get(`questions/${id}`);
};

function addQuestionRequest(data) {
  return http.post('questions', data);
};

export function* getQuestions() {
  while (true) {
    try {
      yield take(QUESTIONS.LOAD);
      const response = yield call(fetchQuestionsRequest);
      const questions = response.data;
  
      // dispatch a success action to the store with the questions
      yield put(setQuestions(questions));
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put(setError(error));
    }
  }
};

export function* getQuestionDetails() {
  while (true) {
    try {
      const { id } = yield take(QUESTIONS_DETAILS.LOAD);
      const response = yield call(fetchQuestionDetailsRequest, id);
      const questions = response.data;
  
      // dispatch a success action to the store with the questions
      yield put(setQuestionDetails(questions));
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put(setQuestionDetailsError(error));
    }
  }
};

export function* addQuestion() {
  while (true) {
    try {
      const { payload } = yield take(ADD_QUESTION.LOAD);
      yield call(addQuestionRequest, payload.data);
  
      // dispatch a success action to the store with the questions
      yield put(addQuestionSuccess())
  
      payload.history.push('/');
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put(addQuestionError(error));
    }
  }
};
