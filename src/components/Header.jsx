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
    const { name, score } = this.props;
    return (
      <header className="header-container">
        <img
          src={ this.hashGenerator() }
          alt={ `${name} Avatar` }
          className="avatar"
          data-testid="header-profile-picture"
        />
        <div className="header-info">
          <strong data-testid="header-player-name">
            { name }
          </strong>
          <span data-testid="header-score">
            { score }
          </span>
        </div>
      </header>
    );
  }
}

// const mapDispatchToProps = {

// }

export default connect(null)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
