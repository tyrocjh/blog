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
		const { comment, modal, dispatch } = this.props;

		return (
			<div className="comment">
				<CommentSendBox showModal={this.showModal} dispatch={dispatch} />
				<CommentList showModal={this.showModal} comment={comment} dispatch={dispatch} />
				<Modal {...modal} dispatch={dispatch} />
			</div>
		)
	}
}