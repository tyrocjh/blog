import React, { Component } from 'react';

import CommentSendBox from './CommentSendBox';
import CommentList from './CommentList';

export default class Comment extends Component {
	render() {
		const { comment, modal, dispatch } = this.props;

		return (
			<div className="comment">
				<CommentSendBox modal={modal} dispatch={dispatch} />
				<CommentList comment={comment} dispatch={dispatch} />
			</div>
		)
	}
}