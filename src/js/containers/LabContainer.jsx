import React, { Component } from 'react';
import { connect } from 'react-redux';

import LabList from '../components/lab/LabList';

class LabContainer extends Component {
	render() {
		return (
			<LabList {...this.props} />
		)
	}
}

function mapStateToProps(state) {
	const { labs } = state;

	return {
		labs
	}
}

export default connect(mapStateToProps)(LabContainer);