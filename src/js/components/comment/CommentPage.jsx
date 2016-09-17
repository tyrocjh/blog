import React, { Component } from 'react';

import CommentSendBox from './CommentSendBox';
import CommentList from './CommentList';
import GithubInfo from '../github/GithubInfo';
import Pagination from '../Pagination';
import Modal from '../modal/Modal';
import { fetchCommentIfNeeded } from '../../actions/comment';
import { fetchGithubInfoIfNeeded } from '../../actions/githubInfo';

export default class CommentPage extends Component {
	constructor(props) {
		super(props);
		const { dispatch } = this.props;
		dispatch(fetchGithubInfoIfNeeded());
	}

	changePage(dispatch, page) {
		dispatch(fetchCommentIfNeeded(page));
	}

	showModal(dispatch, action) {
		dispatch(action);
	}

	render() {
		const { githubInfo, commentByPage, pagination, modal, dispatch } = this.props;

		return (
			<div className="comment-page">
				<header>
					<div className="container">
						<div className="msg"><i className="fa fa-comments-o"></i>说点啥</div>
						<div className="col-sm-10 col-sm-offset-1">
							<CommentSendBox showModal={this.showModal} dispatch={dispatch} />
						</div>
					</div>
				</header>

				<section className="comment-section">
					<div className="container">
						<div className="col-sm-8">
							<CommentList showModal={this.showModal} commentByPage={commentByPage} pagination={pagination} dispatch={dispatch} />
							<Pagination {...pagination} changePage={this.changePage} dispatch={dispatch} queryParams='' />
						</div>
						<div className="col-sm-4">
							<GithubInfo githubInfo={githubInfo} />
							<CommentList slide={true} showModal={this.showModal} commentByPage={commentByPage} pagination={pagination} dispatch={dispatch} />
						</div>
					</div>
				</section>

				<Modal {...modal} dispatch={dispatch} />
			</div>
		)
	}
}