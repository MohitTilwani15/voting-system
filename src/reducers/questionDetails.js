import { QUESTIONS_DETAILS } from '../constants';

const initialState = {
  fetching: false,
  data: null,
  error: null
};

const questionDetails = (state = initialState, action) => {
  switch (action.type) {
    case QUESTIONS_DETAILS.LOAD:
      return { ...state, fetching: true, error: null };
    case QUESTIONS_DETAILS.LOAD_SUCCESS:
      return { ...state, fetching: false, data: action.questionsDetails };
    case QUESTIONS_DETAILS.LOAD_FAIL:
      return { ...state, fetching: false, data: null, error: action.error }; 
    default:
      return state;
  }
};

export default questionDetails;