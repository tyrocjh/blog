import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header'

class HeaderContainer extends Component {
  render() {
    return (
      <Header />
    )
  }
}

function mapStateToProps(state) {
	const { mask } = state;

	return {
		mask
	}
}

export default connect(mapStateToProps)(HeaderContainer);