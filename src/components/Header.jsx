import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Header extends Component {
  render() {
    return (
      <div>
        Header
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(Header);
