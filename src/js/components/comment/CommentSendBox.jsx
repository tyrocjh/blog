import React, { Component } from 'react';

import Modal from '../modal/Modal';
import { showModal } from '../../actions/modal';

export default class CommentSendBox extends Component {

	constructor(props) {
		super(props);
		this.state = { enableBox: false };
	}

	handleClick(dispatch) {
		dispatch(showModal('COMMENT-USER', {}));
	}

	handleFocus() {
		this.setState({ enableBox: true });
	}

	handleBlur() {
		let content = this.refs.content.value;
		if(content.trim().length == 0)
			this.setState({ enableBox: false });
	}

	render() {
		const { modal, dispatch } = this.props;

		return (
			<div className="comment-send-box">
				<a className="user" onClick={this.handleClick.bind(this, dispatch)}>
					<img src="/images/default.jpg" />
					<span>tyroCCC</span>
				</a>
				
				<div className={`${this.state.enableBox ? 'active' : ''}`}>
					<div className="box">
						<div className="box-holder">评论屌一点，BUG少一点！</div>
						<textarea ref="content" id="content" onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)}></textarea>
					</div>
					<div className="box-footer clearfix">
						<a href="javascript:void(0)" className="send">发布</a>
					</div>
				</div>

				<Modal {...modal} dispatch={dispatch} />
			</div>
		)
	}
}