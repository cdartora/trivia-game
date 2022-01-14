import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import './Header.css';

export class Header extends Component {
  constructor() {
    super();

    this.hashGenerator = this.hashGenerator.bind(this);
  }

  hashGenerator() {
    const { email } = this.props;
    const hash = md5(email).toString();
    const imgToken = `https://www.gravatar.com/avatar/${hash}`;
    return imgToken;
  }

  render() {
    const { userName, playerScore } = this.props;
    return (
      <header className="header-container">
        <img
          src={ this.hashGenerator() }
          alt={ `${userName} Avatar` }
          className="avatar"
          data-testid="header-profile-picture"
        />
        <div className="header-info">
          <strong data-testid="header-player-name">
            { userName }
          </strong>
          <span data-testid="header-score">
            { playerScore }
          </span>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  playerScore: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  userName: state.player.name,
  playerScore: state.player.score,
});

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(Header);
