import { createStore, applyMiddleware } from 'redux';
// package that allow use of redux devtools
import { composeWithDevTools } from 'redux-devtools-extension';
//middleware that allow async request in actions
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
