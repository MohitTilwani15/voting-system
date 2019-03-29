import { QUESTIONS_DETAILS } from '../constants';

const loadQuestionDetails = (id) => ({
  type: QUESTIONS_DETAILS.LOAD,
  id,
});

const setQuestionDetails = questionsDetails => {
  return {
    type: QUESTIONS_DETAILS.LOAD_SUCCESS,
    questionsDetails,
  }
};

const setQuestionDetailsError = error => ({
  type: QUESTIONS_DETAILS.LOAD_FAIL,
  error,
});

export {
  loadQuestionDetails,
  setQuestionDetails,
  setQuestionDetailsError,
};
