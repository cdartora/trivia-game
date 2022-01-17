import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Ranking extends Component {
  render() {
    return (
      <div>
        <strong data-testid="ranking-title">
          Ranking
        </strong>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  score: state.player.score,
  name: state.player.name,
});

export default connect(mapStateToProps)(Ranking);
