import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Feedback extends Component {
  render() {
    return (
      <div
        data-testid="feedback-text"
      >
        Feedback
      </div>
    );
  }
}

export default withRouter(Feedback);
