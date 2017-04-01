import { combineReducers } from 'redux';

import counterReducer from './containers/Counter/counterReducers';

export default combineReducers({
  counter: counterReducer,
})
