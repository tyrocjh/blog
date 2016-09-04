import React, { Component } from 'react';
import moment from 'moment';

export default class CommentItem extends Component {
	handleClick(dispatch) {
		// dispatch(showModal('COMMENT-USER', {}));
	}

	render() {
		let { comment, modal, dispatch } = this.props;

		return (
			<div className="comment-item">
				<div className="user">
					<img src={`${comment.user.avatar ? comment.user.avatar : '/images/avatar.jpg'}`} />
				</div>

				<div className="info">
					<span>{comment.user.username}</span>
					<p>{comment.content}</p>
					<div className="footer">
						<span>{moment(parseInt(comment.time)).format('hh:mm YYYY-MM-DD')}</span>
						<a href="javascript:void(0);" onClick={this.handleClick.bind(this, dispatch)}>回复</a>
					</div>
				</div>
			</div>
		)
	}
}