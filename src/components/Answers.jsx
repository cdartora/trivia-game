import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateAssertions, updateScore } from '../redux/actions/actionPlayer';
import './Answers.css';

class Answers extends Component {
  constructor() {
    super();

    this.state = {
      classes: [],
      isRunning: true,
      timer: 30,
    };

    this.saveRandomPositions = this.saveRandomPositions.bind(this);
    this.timerCounter = this.timerCounter.bind(this);
  }

  componentDidMount() {
    this.countAnswers();
    this.setTimer();
  }

  setTimer() {
    const { isRunning } = this.state;
    const THIRTY_SECONDS = 30010;
    const ONE_SECOND = 1000;

    setTimeout(this.timeIsOver, THIRTY_SECONDS);

    if (isRunning) {
      setInterval(this.timerCounter, ONE_SECOND);
    }
  }

  nextHandler = () => {
    const { nextQuestion } = this.props;
    nextQuestion();
    this.countAnswers();
    this.setState({ timer: 30, isRunning: true });
    this.setTimer();
  };

  timeIsOver = () => {
    const { isRunning } = this.state;
    if (isRunning) {
      this.setState({ isRunning: false });
    }
  }

  correctAnswerClick = () => {
    const { timer } = this.state;
    const { difficulty, newScore, recordCount } = this.props;

    this.setState({ isRunning: false });

    const score = this.calculateScore(timer, difficulty);

    newScore(score);
    recordCount();
  };

  incorrectAnswerClick = () => this.setState({ isRunning: false });

  calculateScore = (timer, difficulty) => {
    let score;
    const BASE_POINTS = 10;
    const HARD_MULTIPLIER = 3;
    const MEDIUM_MULTIPLIER = 2;

    switch (difficulty) {
    case 'hard':
      score = BASE_POINTS + (timer * HARD_MULTIPLIER);
      break;
    case 'medium':
      score = BASE_POINTS + (timer * MEDIUM_MULTIPLIER);
      break;
    case 'easy':
      score = BASE_POINTS + timer;
      break;
    default:
      score = BASE_POINTS;
    }

    return score;
  }

  timerCounter = () => {
    const { isRunning } = this.state;

    if (isRunning) {
      this.setState((prev) => ({ timer: prev.timer - 1 }));
    }
  }

  countAnswers() {
    const FIRST = 1;
    const SECOND = 2;
    const THIRD = 3;
    const FORTH = 4;

    const positions = [FIRST, SECOND, THIRD, FORTH];

    this.saveRandomPositions(positions);
  }

  saveRandomPositions(numbers) {
    const classes = [];

    const originalLength = numbers.length;

    for (let i = 0; i < originalLength; i += 1) {
      classes.push(numbers.splice(Math.floor(Math.random() * numbers.length), 1));
    }

    this.setState({ classes });
  }

  render() {
    const { correct, wrong } = this.props;
    const { classes, isRunning, timer } = this.state;
    return (
      <div className="answers-container" data-testid="answer-options">
        <button
          type="button"
          data-testid="correct-answer"
          className={
            `position${classes[0]} ${isRunning ? null : 'correct'} button-answer`
          }
          onClick={ this.correctAnswerClick }
          disabled={ !isRunning }
        >
          {correct}

        </button>
        {
          wrong.map((answer, index) => (
            <button
              type="button"
              data-testid={ `wrong-answer${index} wrong` }
              className={ `position${classes[index + 1]}
              ${isRunning ? null : 'incorrect'} button-answer` }
              onClick={ this.incorrectAnswerClick }
              key={ index }
              disabled={ !isRunning }
            >
              {answer}

            </button>
          ))
        }
        <div>
          {timer}
          {' '}
          segundos
        </div>

        {
          isRunning ? null : (
            <button
              type="button"
              className="next-button"
              data-testid="btn-next"
              onClick={ this.nextHandler }
            >
              Pr??xima Pergunta

            </button>
          )
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  newScore: (score) => dispatch(updateScore(score)),
  recordCount: () => dispatch(updateAssertions()),
});

export default connect(null, mapDispatchToProps)(Answers);

Answers.propTypes = {
  correct: PropTypes.string.isRequired,
  wrong: PropTypes.arrayOf(String).isRequired,
  nextQuestion: PropTypes.func.isRequired,
  newScore: PropTypes.func.isRequired,
  difficulty: PropTypes.string.isRequired,
  recordCount: PropTypes.func.isRequired,
};
