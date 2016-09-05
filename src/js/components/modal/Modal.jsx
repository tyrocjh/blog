import React, { Component } from 'react';
import { connect } from 'react-redux';

import FriendModal from './FriendModal';
import CommentUserModal from './CommentUserModal';
import CommentReplyModal from './CommentReplyModal';
import { hideModal } from '../../actions/modal';

const MODAL_COMPONENTS = {
  'FRIEND': FriendModal,
  'COMMENT-USER': CommentUserModal,
  'COMMENT-REPLY': CommentReplyModal
}

export default class Modal extends Component {
	closeModal() {
		const { dispatch } = this.props;
		dispatch(hideModal());
	}

	render() {
		const { modalType, modalProps, dispatch } = this.props;

		if(!modalType) {
			return null;
		}

		const SpecificModal = MODAL_COMPONENTS[modalType];
		return <SpecificModal closeModal={this.closeModal.bind(this)} modalProps={modalProps} dispatch={dispatch} />
	}
}