import React, { Fragment, useState } from 'react'
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LoginActions } from '../store/ducks/login';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username, password);
    props.loginRequest(username, password);
  }

  return (
    <Fragment>
      <form onSubmit={handleLogin}>

        <label>Username</label>
        <input
          placeholder="Username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)} />

        <label>Password</label>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)} />
        <button type="submit">Log In</button>
        {props.login.loading && <span>carregando...</span>}
        {!!props.login.error && <span style={{ color: '#f00' }}>{props.login.error}</span>}
        {!!props.login.token && <Redirect to='/' />}
      </form>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);