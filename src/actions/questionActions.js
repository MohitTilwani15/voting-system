import { QUESTIONS } from '../constants';

const loadQuestions = () => ({
  type: QUESTIONS.LOAD,
});

const setQuestions = questions => ({
  type: QUESTIONS.LOAD_SUCCESS,
  questions,
});

const setError = error => ({
  type: QUESTIONS.LOAD_FAIL,
  error,
});

export {
  loadQuestions,
  setQuestions,
  setError,
};
