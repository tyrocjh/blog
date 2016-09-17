import React, { Component } from 'react';

import CommentSendBox from './CommentSendBox';
import CommentList from './CommentList';
import Pagination from '../Pagination';
import Modal from '../modal/Modal';
import { fetchCommentIfNeeded } from '../../actions/comment';

export default class Comment extends Component {
	changePage(dispatch, page) {
		dispatch(fetchCommentIfNeeded(page));
	}

	showModal(dispatch, action) {
		dispatch(action);
	}

	render() {
		const { commentByPage, pagination, modal, dispatch } = this.props;

		return (
			<div className="comment">
				<CommentSendBox showModal={this.showModal} dispatch={dispatch} />
				<CommentList showModal={this.showModal} commentByPage={commentByPage} pagination={pagination} dispatch={dispatch} />
				<Pagination {...pagination} changePage={this.changePage} dispatch={dispatch} queryParams='' />
				<Modal {...modal} dispatch={dispatch} />
			</div>
		)
	}
}