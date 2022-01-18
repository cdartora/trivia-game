import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Game from '../components/Game';

class GameBody extends Component {
  render() {
    return (
      <div>
        <Header />
        <Game />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  score: state.player.score,
  name: state.player.name,
});

export default connect(mapStateToProps)(GameBody);
