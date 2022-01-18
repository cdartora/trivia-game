import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getRanking } from '../redux/helpers/savePlayerOnRanking';

class Ranking extends Component {
  render() {
    return (
      <div>
        <Link to="/" data-testid="btn-go-home">Play Again</Link>
        {
          getRanking().map(({ avatar, name, score }, index) => (
            <div key={ index }>
              <img src={ avatar } alt={ `${name} avatar` } />
              <p data-testid={ `player-name-${index}` }>{name}</p>
              <p data-testid={ `player-score-${index}` }>{score}</p>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Ranking;

