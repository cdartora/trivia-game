import React, { Component } from 'react';
import { getRanking } from '../redux/helpers/savePlayerOnRanking';
import './Ranking.css';

class Ranking extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="ranking-container">

        <div className="ranking-screen">
          <h1 data-testid="ranking-title" className="ranking-title">Ranking</h1>
          <div className="ranking">
            {
              getRanking().map(({ avatar, name, score }, index) => (
                <div className="rank" key={ index }>
                  <img src={ avatar } alt={ `${name} avatar` } />
                  <p data-testid={ `player-name-${index}` }>{name}</p>
                  <strong data-testid={ `player-score-${index}` }>{score}</strong>
                </div>
              ))
            }
          </div>
          <button
            type="button"
            onClick={ () => history.push('/') }
            data-testid="btn-go-home"
            className="play-again-button"
          >
            Play Again

          </button>
        </div>
      </div>
    );
  }
}

export default Ranking;
