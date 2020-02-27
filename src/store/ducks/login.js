/* Types */
export const Types = {
  LOGIN_REQUEST: 'login/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'login/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'login/LOGIN_FAILURE',
}

/* Reducer */
const INITIAL_STATE = {
  loading: false,
  user: {},
  error: null,
  token: null,
};

export default function login(state = INITIAL_STATE, action) {

  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload.user,
        token: action.payload.token
      };
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default:
      return state;
  }

}

/* Actions */
export const Creators = {
  loginRequest: (user, password) => ({
    type: Types.LOGIN_REQUEST,
    payload: { user, password }
  }),
  loginSuccess: (user, token) => ({
    type: Types.LOGIN_SUCCESS,
    payload: { user, token }
  }),
  loginFailure: error => ({
    type: Types.LOGIN_FAILURE,
    payload: { error }
  })
};