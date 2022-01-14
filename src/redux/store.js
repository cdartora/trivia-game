import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './reducers/login';

const store = createStore(userReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

if (window.Cypress) {
  window.store = store;
}

export default store;
