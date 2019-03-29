import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import sagas from "./sagas";


const configureStore = () => {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // mount it on the Store
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ?
      compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__(),
      ) : applyMiddleware(sagaMiddleware),
  );

  // then run the saga
  sagaMiddleware.run(sagas);

  return store;
}

export default configureStore;
