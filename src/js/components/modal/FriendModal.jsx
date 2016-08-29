import React, { Component } from 'react';
import Modal from 'react-modal';

export default class FriendModal extends Component {
	openModal() {
		this.setState({modalIsOpen: true});
	}

  closeModal() {
    this.setState({modalIsOpen: false});
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
            <h4 className="modal-title">我也要上榜</h4>
          </div>
          <div className="modal-body">
          	<form className="form-horizontal">
							<div className="form-group">
							  <label htmlFor="name" className="col-xs-3 control-label">尊姓大名</label>
							  <div className="col-xs-8">
							    <input id="name" className="form-control" type="text" placeholder="你更喜欢别人怎么称呼你？" />
							  </div>
							</div>
							<div className="form-group">
							  <label htmlFor="blog" className="col-xs-3 control-label">博客地址</label>
							  <div className="col-xs-8">
							    <input id="blog" className="form-control" type="text" placeholder="http://" />
							  </div>
							</div>
							<div className="form-group">
							  <label htmlFor="github" className="col-xs-3 control-label">Github用户名</label>
							  <div className="col-xs-8">
							    <input id="github" className="form-control" type="text" placeholder="如：tyro" />
							  </div>
							</div>
							<div className="form-group">
							  <label htmlFor="descript" className="col-xs-3 control-label">个人描述</label>
							  <div className="col-xs-8">
							    <textarea id="descript" className="form-control" placeholder="一句话介绍自己，简洁无废话，低调且骚气！"></textarea>
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