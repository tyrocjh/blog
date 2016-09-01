import React, { Component } from 'react';

export default class CommentItem extends Component {
	render() {
		let { comment } = this.props;

		return (
			<div>
				<div>{comment.time}</div>
				<div>{comment.user.username}</div>
			</div>
		)
	}
}