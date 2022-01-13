import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

export class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            placeholder="Insira seu email"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            placeholder="Insira sua senha"
          />
        </label>
        <button type="submit">
          Play
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.email,
});

export default connect(mapStateToProps)(Login);
