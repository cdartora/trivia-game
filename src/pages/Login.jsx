import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

export class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateButton = this.validateButton.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  validateButton() {
    const { email, name } = this.state;
    const MIN_LENGTH = 1;

    if (email.length >= MIN_LENGTH && name.length >= MIN_LENGTH) {
      return false;
    }
    return true;
  }

  render() {
    const { email, name } = this.state;
    return (
      <form>
        <label htmlFor="name">
          <input
            data-testid="input-player-name"
            type="name"
            name="name"
            value={ name }
            onChange={ this.handleChange }
            placeholder="Insira seu name de Usuario"
          />
        </label>
        <label htmlFor="email">
          <input
            data-testid="input-gravatar-email"
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            placeholder="Insira seu email"
          />
        </label>
        <button
          type="submit"
          data-testid="btn-play"
          disabled={ this.validateButton() }
        >
          Play
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.email,
  gravatarEmail: state.gravatarEmail,
});

export default connect(mapStateToProps)(Login);
