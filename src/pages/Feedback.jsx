import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* import { withRouter } from 'react-router'; */
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './feedback.css';

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
    const { correctAnswers, score } = this.props;
    console.log(correctAnswers);
    return (
      <div>
        <Header />
        <div>
          <p data-testid="feedback-total-score">
            {score}
          </p>
          <strong data-testid="feedback-total-question">
            {`total de acertos:${correctAnswers}`}
          </strong>
          <strong data-testid="feedback-text">
            {correctAnswers >= WELLDONE ? 'Well Done!' : 'Could be better...'}
          </strong>
        </div>
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

Feedback.propTypes = {
  history: PropTypes.objectOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  score: state.player.score,
  name: state.player.name,
  correctAnswers: state.user.correctAnswers,
});

export default connect(mapStateToProps)(Feedback);
