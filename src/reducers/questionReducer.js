import { QUESTIONS } from '../constants';

const initialState = {
  fetching: false,
  data: [],
  error: null
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTIONS.LOAD:
      return { ...state, fetching: true, error: null };
    case QUESTIONS.LOAD_SUCCESS:
      return { ...state, fetching: false, data: action.questions };
    case QUESTIONS.LOAD_FAIL:
      return { ...state, fetching: false, data: null, error: action.error }; 
    default:
      return state;
  }
};

export default questionReducer;