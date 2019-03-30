import { getQuestions, getQuestionDetails, addQuestion } from './questions';

export default function* sagas() {
  yield getQuestions();
  yield getQuestionDetails();
  yield addQuestion();
};
