import { ADD_QUESTION } from '../constants';

const initialState = {
  fetching: false,
  error: null,
  question: null,
};

const addQuestion = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION.STORE_LOCALLY:
      return { ...state, fetching: true, question: action.question, error: null }
    case ADD_QUESTION.LOAD:
      return { ...state, fetching: true, error: null };
    case ADD_QUESTION.LOAD_SUCCESS:
      return { ...state, fetching: false };
    case ADD_QUESTION.LOAD_FAIL:
      return { ...state, fetching: false, error: action.error }; 
    default:
      return state;
  }
};

export default addQuestion;