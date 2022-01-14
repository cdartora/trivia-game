import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from '../components/Header';

export class GameBody extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.email,
});

// const mapDispatchToProps = {

// };

export default connect(mapStateToProps)(GameBody);
