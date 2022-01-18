import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import './Feedback.css';

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
    const WELLDONE = 3;
    const { assertions, score } = this.props;
    return (
      <div>
        <Header />
        <div>
          <p data-testid="feedback-total-score">
            {score}
          </p>
          <strong>
            Numero de Acertos
            {' '}
          </strong>
          <strong data-testid="feedback-total-question">
            {assertions}
          </strong>
          <p data-testid="feedback-text">
            {assertions >= WELLDONE ? 'Well Done!' : 'Could be better...'}
          </p>
        </div>
        <Link
          to="/"
          data-testid="btn-play-again"
        >
          Play Again

        </Link>
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
  score: state.player.score,
  assertions: state.player.assertions,
});

export default connect(mapStateToProps)(Feedback);

Feedback.propTypes = {
  history: PropTypes.objectOf(Object).isRequired,
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};
