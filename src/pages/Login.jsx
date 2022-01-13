import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

export class Login extends Component {
  render() {
    return (
      <form>
        Login
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.email,
});

export default connect(mapStateToProps)(Login);
