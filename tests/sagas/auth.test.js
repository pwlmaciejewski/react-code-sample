import { expect } from 'chai';
import { put } from 'redux-saga/effects';
import { handleSignIn } from '../../src/sagas/auth';
import {
  signInFail,
  signInSuccess
} from '../../src/modules/auth';
import ValidationError from '../../src/lib/ValidationError';

describe('Auth saga', function() {
  describe('handleSignIn', function() {
    it('should put error on invalid login', function() {
      const generator = handleSignIn({ payload: { email: 'foo' }})
      const value = generator.next().value;
      const error = signInFail(new ValidationError('auth/invalid-email'));
      expect(value).to.be.deep.equal(put(error));
    });

    it('should put error on invalid password', function() {
      const generator = handleSignIn({ payload: { email: 'foo@gmail.com', password: '1' }})
      const value = generator.next().value;
      const error = signInFail(new ValidationError('auth/invalid-password'));
      expect(value).to.be.deep.equal(put(error));
    });

    it('should put error on invalid credentials', function() {
      const generator = handleSignIn({ payload: { email: 'foo@gmail.com', password: '123' }})
      const value = generator.next().value;
      const error = signInFail(new ValidationError('auth/invalid-credentials'));
      expect(value).to.be.deep.equal(put(error));
    });

    it('should put success on correct credentials', function() {
      const payload = {
        email: 'foo@example.com',
        password: 'barbaz'
      };
      const generator = handleSignIn({ payload })
      generator.next();
      const value = generator.next().value;
      const success = signInSuccess();
      expect(value).to.be.deep.equal(put(success));
    });
  });
});
