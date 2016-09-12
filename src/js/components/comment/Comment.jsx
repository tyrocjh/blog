import React, { Component } from 'react';

import CommentSendBox from './CommentSendBox';
import CommentList from './CommentList';
import Pagination from '../Pagination';
import Modal from '../modal/Modal';
import { showModal } from '../../actions/modal';

export default class Comment extends Component {
	showModal(dispatch, action) {
		dispatch(action);
	}

	render() {
		const { commentByPage, pagination, modal, dispatch } = this.props;

		return (
			<div className="comment">
				<CommentSendBox showModal={this.showModal} dispatch={dispatch} />
				<CommentList showModal={this.showModal} commentByPage={commentByPage} pagination={pagination} dispatch={dispatch} />
				<Pagination {...pagination} path={'/'} queryParams='' />
				<Modal {...modal} dispatch={dispatch} />
			</div>
		)
	}
}