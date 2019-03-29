import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { setQuestions, setError } from '../actions/questionActions';
import { setQuestionDetails, setQuestionDetailsError } from '../actions/questionDetails';
import { addQuestionSuccess, addQuestionError } from '../actions/addQuestions';

function fetchQuestionsRequest() {
  return axios({
    method: 'get',
    url: 'http://polls.apiblueprint.org/questions',
  });
};

function fetchQuestionDetailsRequest(id) {
  return axios({
    method: 'get',
    url: `http://polls.apiblueprint.org/questions/${id}`,
  });
};

function addQuestionRequest({ data }) {
  debugger;
  return axios({
    method: 'post',
    url: 'http://polls.apiblueprint.org/questions',
    data,
  });
};

export function* getQuestions() {
  try {
    const response = yield call(fetchQuestionsRequest);
    const questions = response.data;

    // dispatch a success action to the store with the questions
    yield put(setQuestions(questions));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(setError(error));
  }
};

export function* getQuestionDetails(action) {
  try {
    const response = yield call(fetchQuestionDetailsRequest, action.id);
    const questions = response.data;

    // dispatch a success action to the store with the questions
    yield put(setQuestionDetails(questions));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(setQuestionDetailsError(error));
  }
};

export function* addQuestion(action) {
  try {
    debugger;
    yield call(addQuestionRequest, action.payload);

    // dispatch a success action to the store with the questions
    yield put(addQuestionSuccess())

    action.payload.history.push('/');
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(addQuestionError(error));
  }
};
