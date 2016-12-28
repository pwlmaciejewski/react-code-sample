import { takeLatest, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { isEmail } from 'validator';
import ValidationError from '../lib/ValidationError';
import {
  REQUEST_SIGN_IN,
  signInSuccess,
  signInFail
} from '../modules/auth';

export function* handleSignIn({ payload }) {
  const { email = '', password = '' } = payload;
  try {
    if (!isEmail(email)) throw new ValidationError('auth/invalid-email');
    if (password.length < 3) throw new ValidationError('auth/invalid-password');
    if (email !== 'foo@example.com' || password !== 'barbaz') {
      throw new ValidationError('auth/invalid-credentials');
    }
    yield call(delay, 1000);
    yield put(signInSuccess());
  } catch (err) {
    yield put(signInFail(err));
  }
}

export default function* saga() {
  return yield [
    takeLatest(REQUEST_SIGN_IN, handleSignIn)
  ];
}

