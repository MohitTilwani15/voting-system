import { ADD_QUESTION } from '../constants';

const storeQuestionLocally = (question) => ({
  type: ADD_QUESTION.STORE_LOCALLY,
  question,
});

const resetQuestion = () => ({
  type: ADD_QUESTION.RESET,
});

const addQuestion = (payload) => ({
  type: ADD_QUESTION.LOAD,
  payload,
});

const addQuestionSuccess = () => ({
  type: ADD_QUESTION.LOAD_SUCCESS,
});

const addQuestionError = error => ({
  type: ADD_QUESTION.LOAD_FAIL,
  error,
});

export {
  storeQuestionLocally,
  resetQuestion,
  addQuestion,
  addQuestionSuccess,
  addQuestionError,
};
