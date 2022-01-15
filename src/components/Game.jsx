import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Answers from './Answers';
import './Game.css';

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
    const { questions } = this.props;

    if (questionNumber !== questions.length - 1) {
      this.setState((prev) => ({ questionNumber: prev.questionNumber + 1 }));
    } else {
      console.log('acabou');
    }
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
});

export default connect(mapStateToProps)(Game);

Game.propTypes = {
  questions: PropTypes.arrayOf(Object),
};

Game.defaultProps = {
  questions: undefined,
};
