import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginHandler, handleQuestions } from '../redux/actions/actionLogin';
import { resetScore, saveEmailHeader, saveUser } from '../redux/actions/actionPlayer';
import './login.css';

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

  componentDidMount() {
    const { standardScore } = this.props;

    standardScore();
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
    const { history,
      saveName,
      saveEmail,
      saveHeaderEmail,
      fetchQuestions,
    } = this.props;

    saveEmail(email);
    saveHeaderEmail(email);
    saveName(name);
    fetchQuestions();

    this.setState({
      email: '',
      name: '',
    });

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
      <div className="login-container">
        <form className="login-form">
          <h1>Trivia</h1>
          <h2>Login</h2>
          <label className="login-input" htmlFor="name">
            <input
              data-testid="input-player-name"
              type="name"
              name="name"
              value={ name }
              onChange={ this.handleChange }
              placeholder="Nome"
            />
          </label>
          <label className="login-input" htmlFor="email">
            <input
              data-testid="input-gravatar-email"
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              placeholder="E-mail"
            />
          </label>
          <button
            type="submit"
            data-testid="btn-play"
            disabled={ this.validateButton() }
            onClick={ this.clickButton }
            className="login-play-button"
          >
            Play
          </button>

          {
            isSettingsOpen ? (
              <p
                className="login-settings-menu"
                data-testid="settings-title"
              >
                Configurações

              </p>
            ) : (
              <button
                type="button"
                data-testid="btn-settings"
                onClick={ this.handleSettings }
                className="login-settings-button"

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
  fetchQuestions: PropTypes.func.isRequired,
  standardScore: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  score: state.player.score,
  name: state.player.name,
  // gravatarEmail: state.player.gravatarEmail,
});

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => (dispatch(loginHandler(email))),
  saveName: (UserName) => (dispatch(saveUser(UserName))),
  saveHeaderEmail: (email) => (dispatch(saveEmailHeader(email))),
  fetchQuestions: () => (dispatch(handleQuestions())),
  standardScore: () => dispatch(resetScore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
