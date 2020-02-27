import React from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      {!props.login.token && <Redirect to='/login' />}
    </div>
  )
}

const mapStateToProps = state => ({
  login: state.login
});

export default connect(mapStateToProps)(Home);