import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from '../components/Header';

export class GameBody extends Component {
  render() {
    const { email, name, score } = this.props;
    console.log(email);
    return (
      <div>
        <Header email={ email } name={ name } score={ score } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  score: state.player.score,
  name: state.player.name,
});

// const mapDispatchToProps = {

// };

export default connect(mapStateToProps)(GameBody);

GameBody.propTypes = {
  email: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
