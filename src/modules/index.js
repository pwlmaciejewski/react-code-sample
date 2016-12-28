import { combineReducers } from 'redux';
import auth from './auth';

export * from './auth';

const combinedReducer = combineReducers({
  auth
});

export default function reducer(...args) { return combinedReducer(...args); }
