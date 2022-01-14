import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginHandler } from '../redux/actions/actionLogin';
import { saveEmailHeader, saveUser } from '../redux/actions/actionPlayer';

export class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      name: '',
      isSettingsOpen: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateButton = this.validateButton.bind(this);
    this.clickButton = this.clickButton.bind(this);
    this.handleSettings = this.handleSettings.bind(this);
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

  clickButton(e) {
    e.preventDefault();

    const { name, email } = this.state;
    const { history, saveName, saveEmail, saveHeaderEmail } = this.props;
    saveEmail(email);
    saveHeaderEmail(email);
    saveName(name);

    // this.setState({
    //   email: '',
    //   name: '',
    // });

    history.push('player');
  }

  handleSettings() {
    this.setState({
      isSettingsOpen: true,
    });
  }

  render() {
    const { email, name, isSettingsOpen } = this.state;
    return (
      <div>
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
            onClick={ this.clickButton }
          >
            Play
          </button>

          {
            isSettingsOpen ? (
              <p data-testid="settings-title">Configurações</p>
            ) : (
              <button
                type="button"
                data-testid="btn-settings"
                onClick={ this.handleSettings }
              >
                Configurações
              </button>
            )
          }
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(Object).isRequired,
  saveName: PropTypes.func.isRequired,
  saveEmail: PropTypes.func.isRequired,
  saveHeaderEmail: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.email,
  // gravatarEmail: state.player.gravatarEmail,
});

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => (dispatch(loginHandler(email))),
  saveName: (UserName) => (dispatch(saveUser(UserName))),
  saveHeaderEmail: (email) => (dispatch(saveEmailHeader(email))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
