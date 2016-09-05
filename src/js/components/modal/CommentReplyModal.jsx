import React, { Component } from 'react';
import Modal from 'react-modal';

import CommentSendBox from '../comment/CommentSendBox';

export default class CommentReplyModal extends Component {
	constructor(props) {
		super(props);
		this.state = {modalIsOpen: true};
	}

  closeModal() {
		this.setState({modalIsOpen: false});
		this.props.closeModal();
  }

	render() {
		let { modalProps, dispatch } = this.props;

		return (
      <Modal
        className="Modal__Bootstrap modal-dialog"
        closeTimeoutMS={150}
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal.bind(this)}
      >
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" onClick={this.closeModal.bind(this)}>
              <span aria-hidden="true">&times;</span>
              <span className="sr-only">Close</span>
            </button>
            <h4 className="modal-title">回复：{modalProps.username}</h4>
          </div>
          <div className="modal-body">
          	<CommentSendBox showModal={modalProps.showModal} dispatch={dispatch} />
          </div>
        </div>
      </Modal>
		)
	}
}