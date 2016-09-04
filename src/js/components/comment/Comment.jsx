import React, { Component } from 'react';

import CommentSendBox from './CommentSendBox';
import CommentList from './CommentList';
import Modal from '../modal/Modal';
import { showModal } from '../../actions/modal';

export default class Comment extends Component {
	handleClick(dispatch) {
		dispatch(showModal('COMMENT-USER', {}));
	}

	render() {
		const { comment, modal, dispatch } = this.props;

		return (
			<div className="comment">
				<CommentSendBox modal={modal} dispatch={dispatch} />
				<CommentList comment={comment} modal={modal} dispatch={dispatch} />
				<Modal {...modal} dispatch={dispatch} />
			</div>
		)
	}
}