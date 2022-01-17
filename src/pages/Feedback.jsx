import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* import { withRouter } from 'react-router'; */
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    const { email, name, score } = this.props;
    return (
      <div
        data-testid="feedback-text"
      >
        <Header email={ email } name={ name } score={ score } />
        Feedback
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  score: state.player.score,
  name: state.player.name,
});

export default connect(mapStateToProps)(Feedback);

Feedback.propTypes = {
  email: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
