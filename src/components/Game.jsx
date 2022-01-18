import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import md5 from 'crypto-js/md5';
import Answers from './Answers';
import './Game.css';
import savePlayerOnRanking from '../redux/helpers/savePlayerOnRanking';

class Game extends Component {
  constructor() {
    super();

    this.state = {
      questionNumber: 0,
    };

    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion() {
    const { questionNumber } = this.state;
    const { questions, history, name, score } = this.props;

    if (questionNumber !== questions.length - 1) {
      this.setState((prev) => ({ questionNumber: prev.questionNumber + 1 }));
    } else {
      savePlayerOnRanking(this.hashGenerator(), name, score);
      history.push('/feedback');
    }
  }

  hashGenerator() {
    const { gravatar } = this.props;
    const hash = md5(gravatar).toString();
    const imgToken = `https://www.gravatar.com/avatar/${hash}`;
    return imgToken;
  }

  render() {
    const { questions } = this.props;
    const { questionNumber } = this.state;
    return (
      <div className="game-container">
        <div className="game-menu-container">
          {
            questions ? (
              <div>
                <strong data-testid="question-category">
                  {questions[questionNumber].category}
                </strong>

                <h1 data-testid="question-text">{questions[questionNumber].question}</h1>

                <Answers
                  correct={ questions[questionNumber].correct_answer }
                  wrong={ questions[questionNumber].incorrect_answers }
                  difficulty={ questions[questionNumber].difficulty }
                  nextQuestion={ this.nextQuestion }
                />
              </div>
            ) : null
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.player.questions || undefined,
  score: state.player.score,
  name: state.player.name,
  gravatar: state.player.gravatarEmail,
});

export default withRouter(connect(mapStateToProps)(Game));

Game.propTypes = {
  questions: PropTypes.arrayOf(Object),
  history: PropTypes.objectOf(Object).isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  gravatar: PropTypes.string.isRequired,
};

Game.defaultProps = {
  questions: undefined,
};
