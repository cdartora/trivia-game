import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Answers.css';

class Answers extends Component {
  constructor() {
    super();

    this.state = {
      classes: [],
      isRunning: true,
    };

    this.saveRandomClassnames = this.saveRandomClassnames.bind(this);
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
  }

  componentDidMount() {
    this.countAnswers();
  }

  countAnswers() {
    const { wrong } = this.props;

    const number = [];

    for (let i = 0; i < wrong.length + 1; i += 1) {
      number.push(i + 1);
    }

    this.saveRandomClassnames(number);
  }

  saveRandomClassnames(numbers) {
    const classes = [];

    const originalLength = numbers.length;

    for (let i = 0; i < originalLength; i += 1) {
      classes.push(numbers.splice(Math.floor(Math.random() * numbers.length), 1));
    }

    this.setState({ classes });
  }

  handleAnswerClick() {
    this.setState({ isRunning: false });
  }

  render() {
    const { correct, wrong } = this.props;
    const { classes, isRunning } = this.state;
    return (
      <div className="answers-container" data-testid="answer-options">
        <button
          type="button"
          data-testid="correct-answer"
          className={ `position${classes[0]} ${isRunning ? null : 'correct'}` }
          onClick={ this.handleAnswerClick }
        >
          {correct}

        </button>
        {
          wrong.map((answer, index) => (
            <button
              type="button"
              data-testid={ `wrong-answer${index} wrong` }
              className={ `position${classes[index + 1]} ${isRunning ? null : 'incorrect'}` }
              onClick={ this.handleAnswerClick }
              key={ index }
            >
              {answer}

            </button>
          ))
        }
      </div>
    );
  }
}

export default Answers;

Answers.propTypes = {
  correct: PropTypes.string.isRequired,
  wrong: PropTypes.arrayOf(String).isRequired,
};
