import React, { Component } from 'react';
import { connect } from 'react-redux';

import FriendModal from './FriendModal';
import { hideModal } from '../../actions/modal';

const MODAL_COMPONENTS = {
  'FRIEND': FriendModal,
}

export default class Modal extends Component {
	closeModal() {
		const { dispatch } = this.props;
		dispatch(hideModal());
	}

	render() {
		const { modalType } = this.props;

		if(!modalType) {
			return null;
		}

		const SpecificModal = MODAL_COMPONENTS[modalType];
		return <SpecificModal closeModal={this.closeModal.bind(this)} />
	}
}