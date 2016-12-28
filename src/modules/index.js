import { combineReducers } from 'redux';

export * from './auth';
import auth from './auth';

const _reducer = combineReducers({
  auth
});

export default function reducer(...args) { return _reducer(...args); }
