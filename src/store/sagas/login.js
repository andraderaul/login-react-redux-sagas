import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as LoginActions } from '../ducks/login';

export function* login(action) {
  try {
    const body = {
      senha: action.payload.password,
      login: action.payload.user
    }

    const { data } = yield call(api.post, '/auth/authenticate', body);
    console.log(data);
    const user = data.profissional;
    const token = data.token;
    yield put(LoginActions.loginSuccess(user, token));

  } catch (err) {
    console.tron.log(err);
    yield put(LoginActions.loginFailure('invalid username or password'));
  }
}