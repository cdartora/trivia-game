import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends Component {
  constructor() {
    super();

    this.historyPush = this.historyPush.bind(this);
  }

  historyPush() {
    const { history } = this.props;
    history.push('ranking');
  }

  render() {
    return (
      <div
        data-testid="feedback-text"
      >
        <Header />
        Feedback
        <Link to="/" data-testid="btn-play-again">Play Again</Link>
        <button
          type="button"
          onClick={ this.historyPush }
          data-testid="btn-ranking"
        >
          Ranking
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  score: state.player.score,
  name: state.player.name,
});

export default connect(mapStateToProps)(Feedback);

Feedback.propTypes = {
  history: PropTypes.objectOf(Object).isRequired,
};
