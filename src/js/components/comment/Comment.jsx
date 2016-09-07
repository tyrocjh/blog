import React, { Component } from 'react';

import CommentSendBox from './CommentSendBox';
import CommentList from './CommentList';
import Modal from '../modal/Modal';
import { showModal } from '../../actions/modal';

export default class Comment extends Component {
	showModal(dispatch, action) {
		dispatch(action);
	}

	render() {
		const { commentByPage, commentPage, modal, dispatch } = this.props;

		return (
			<div className="comment">
				<CommentSendBox showModal={this.showModal} dispatch={dispatch} />
				<CommentList showModal={this.showModal} commentByPage={commentByPage} commentPage={commentPage} dispatch={dispatch} />
				<Modal {...modal} dispatch={dispatch} />
			</div>
		)
	}
}