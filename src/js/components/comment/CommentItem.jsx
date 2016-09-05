import React, { Component } from 'react';
import moment from 'moment';

import { showModal } from '../../actions/modal';

export default class CommentItem extends Component {
	handleClick(dispatch, username) {
		this.props.showModal(dispatch, showModal('COMMENT-REPLY', {
			username: username,
			showModal: this.props.showModal
		}));
	}

	render() {
		let { comment, dispatch } = this.props;

		return (
			<div className="comment-item">
				<div className="user">
					<img src={`${comment.user.avatar ? comment.user.avatar : '/images/default.jpg'}`} />
				</div>

				<div className="info">
					<span>{comment.user.username}</span>
					<p>{comment.content}</p>
					<div className="footer">
						<span>{moment(parseInt(comment.time)).format('hh:mm YYYY-MM-DD')}</span>
						<a href="javascript:void(0);" onClick={this.handleClick.bind(this, dispatch, comment.user.username)}>回复</a>
					</div>
				</div>
			</div>
		)
	}
}