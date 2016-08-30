import React, { Component } from 'react';
import Modal from 'react-modal';

export default class FriendModal extends Component {
	constructor(props) {
		super(props);
		this.state = {modalIsOpen: true};
	}

  closeModal() {
		this.setState({modalIsOpen: false});
		this.props.closeModal();
  }

  handleSubmit() {
  	alert('submit...');
  }

	render() {
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
            <h4 className="modal-title">雁过留名</h4>
          </div>
          <div className="modal-body">
          	<form className="form-horizontal">
							<div className="form-group">
							  <label htmlFor="name" className="col-xs-3 control-label">昵称</label>
							  <div className="col-xs-8">
							    <input id="name" className="form-control" type="text" />
							  </div>
							</div>
							<div className="form-group">
							  <label htmlFor="blog" className="col-xs-3 control-label">邮箱地址</label>
							  <div className="col-xs-8">
							    <input id="blog" className="form-control" type="text" />
							  </div>
							</div>
							<div className="form-group">
							  <label htmlFor="github" className="col-xs-3 control-label">博客地址</label>
							  <div className="col-xs-8">
							    <input id="github" className="form-control" type="text" />
							  </div>
							</div>
						</form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" onClick={this.closeModal.bind(this)}>取消</button>
            <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>确认</button>
          </div>
        </div>
      </Modal>
		)
	}
}