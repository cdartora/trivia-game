import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { assertions, score, history } = this.props;
    return (
      <div className="feedback-container">

        <Header />

        <div className="score-screen">
          <div className="score-container">

            <div className="assertions-container">
              <h2>
                Numero de Acertos:
              </h2>

              <h2 data-testid="feedback-total-question" className="assertions">
                {assertions}
              </h2>
            </div>

            <div className="final-score-container">
              <h1>Final Score:</h1>
              <h1 data-testid="feedback-total-score" className="total-score">
                {score}
              </h1>
            </div>

            <p data-testid="feedback-text" className="feedback-text">
              {assertions >= WELLDONE ? 'Well Done!' : 'Could be better...'}
            </p>

          </div>
          <button
            type="button"
            onClick={ () => history.push('/') }
            data-testid="btn-play-again"
            className="play-again-button"
          >
            Play Again

          </button>
          <button
            type="button"
            onClick={ this.historyPush }
            data-testid="btn-ranking"
            className="ranking-button"
          >
            Ranking
          </button>
        </div>
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
