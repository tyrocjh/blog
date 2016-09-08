import React, { Component } from 'react';

import { fetchCommentIfNeeded } from '../../actions/comment';
import CommentItem from './CommentItem';

export default class CommentList extends Component {
	constructor(props) {
		super(props);
		const { commentPage, dispatch } = this.props;
		dispatch(fetchCommentIfNeeded(commentPage));
	}

	render() {
		const { showModal, commentPage, commentByPage, dispatch } = this.props;

		let commentList = commentByPage[commentPage] && commentByPage[commentPage].datas.map((comment, index) => {
			return <CommentItem key={index} showModal={showModal} comment={comment} dispatch={dispatch} />
		});

		return (
			<div className="comment-list">
				{commentList}
			</div>
		)
	}
}