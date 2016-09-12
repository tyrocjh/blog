import React, { Component } from 'react';

import { fetchCommentIfNeeded } from '../../actions/comment';
import CommentItem from './CommentItem';

export default class CommentList extends Component {
	constructor(props) {
		super(props);
		const { pagination, dispatch } = this.props;
		dispatch(fetchCommentIfNeeded(pagination.currentPage));
	}

	render() {
		const { showModal, pagination, commentByPage, dispatch } = this.props;

		let commentList = commentByPage[pagination.currentPage] && commentByPage[pagination.currentPage].datas.map((comment, index) => {
			return <CommentItem key={index} showModal={showModal} comment={comment} dispatch={dispatch} />
		});

		return (
			<div className="comment-list">
				{commentList}
			</div>
		)
	}
}