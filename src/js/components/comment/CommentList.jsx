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
		const { showModal, commentByPage, dispatch } = this.props;

		let commentList = commentByPage.datas && commentByPage.datas.map((comment, index) => {
			return <CommentItem key={index} {...this.props} />
		});

		return (
			<div className="comment-list">
				{commentList}
			</div>
		)
	}
}