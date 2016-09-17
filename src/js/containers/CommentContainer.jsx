import React, { Component } from 'react';
import { connect } from 'react-redux';

import CommentPage from '../components/comment/CommentPage';

class CommentContainer extends Component {
	render() {
		return (
			<CommentPage {...this.props} />
		)
	}
}

function mapStateToProps(state) {
	const { githubInfo, pagination, commentByPage, modal } = state;

	return {
		githubInfo,
		pagination,
		commentByPage,
		modal
	}
}

export default connect(mapStateToProps)(CommentContainer);