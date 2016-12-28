export const REQUEST_SIGN_IN = 'REQUEST_SIGN_IN';
export const requestSignIn = (email, password) => ({
  type: REQUEST_SIGN_IN,
  payload: { email, password }
});

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const signInSuccess = () => ({
  type: SIGN_IN_SUCCESS
});

export const SIGN_IN_FAIL = 'SIGN_IN_FAIL';
export const signInFail = err => ({
  type: SIGN_IN_FAIL,
  payload: err
});

export const RESET_SIGN_IN = 'RESET_SIGN_IN';
export const resetSignIn = () => ({
  type: RESET_SIGN_IN
});

const initialState = {
  pending: false,
  error: null,
  success: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case REQUEST_SIGN_IN:
      return {
        ...state,
        pending: true,
        error: null,
        success: false
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        success: true
      };
    case SIGN_IN_FAIL:
      return {
        ...state,
        pending: false,
        error: payload,
        success: false
      };
    case RESET_SIGN_IN:
      return { ...initialState };
    default:
      return state;
  }
}
