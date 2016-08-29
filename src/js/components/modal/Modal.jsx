import React, { Component } from 'react';
import { connect } from 'react-redux';

import FriendModal from './FriendModal';

const MODAL_COMPONENTS = {
  'FRIEND': FriendModal,
}

export default class Modal extends Component {
	render() {
		const { modalType } = this.props;
		
		console.info(modalType);

		return (
			<div>1</div>
		)
	}
}

// const MODAL_COMPONENTS = {
//   'DELETE_POST': DeletePostModal,
// }

// const ModalRoot = ({ modalType, modalProps }) => {
//   if (!modalType) {
//     return <span /> // after React v15 you can return null here
//   }

//   const SpecificModal = MODAL_COMPONENTS[modalType]
//   return <SpecificModal {...modalProps} />
// }

//http://stackoverflow.com/questions/35623656/how-can-i-display-a-modal-dialog-in-redux-that-performs-asynchronous-actions/35641680