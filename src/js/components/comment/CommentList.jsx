import React, { Component } from 'react';

import { fetchComment } from '../../actions/comment';
import CommentItem from './CommentItem';

export default class CommentList extends Component {
	constructor(props) {
		super(props);
		const { comment, dispatch } = this.props;
		if(comment.datas.length === 0)
			dispatch(fetchComment());
	}

	render() {
		const { showModal, comment, dispatch } = this.props;

		let commentList = comment.datas.map((comment, index) => {
			return <CommentItem key={index} showModal={showModal} comment={comment} dispatch={dispatch} />
		});

		return (
			<div className="comment-list">
				{commentList}
			</div>
		)
	}
}