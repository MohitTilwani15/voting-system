import { combineReducers } from 'redux';

import questionReducer from './questionReducer';
import questionDetails from './questionDetails';
import addQuestion from './addQuestion';

const rootReducer = combineReducers({
  questions: questionReducer,
  questionDetails,
  addQuestion,
});

export default rootReducer;
