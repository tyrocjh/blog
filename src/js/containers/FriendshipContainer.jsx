import React, { Component } from 'react';
import { connect } from 'react-redux';

import Friendship from '../components/friendship/Friendship';

class FriendshipContainer extends Component {
	render() {
		return(
			<Friendship {...this.props} />
		)
	}
}

function mapStateToProps(state) {
	const { friendship } = state;

	return {
		friendship
	}
}

export default connect(mapStateToProps)(FriendshipContainer);