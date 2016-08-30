import React, { Component } from 'react';

import FriendshipItem from './FriendshipItem';
import Modal from '../modal/Modal';
import { showModal } from '../../actions/modal';
import { fetchFriends } from '../../actions/friendship';

export default class Friendship extends Component {
	constructor(props) {
		super(props);
		const { dispatch, friendship } = this.props;
		if(friendship.datas.length == 0)
			dispatch(fetchFriends());
	}

	friendsList(friends) {
		return friends.map((friend, index) => {
			return <FriendshipItem key={index} friend={friend} />
		});
	}

	handleClick(dispatch) {
		dispatch(showModal('FRIEND', {}));
	}

	render() {
		const { friendship, modal, dispatch } = this.props;

		return (
			<div className={`friendship ${(!!modal.modalType ? 'ui-blur' : '')}`}>
				<header>
					<div className="container">
						<div className="nav">
							<a href="/">回到首页</a>
						</div>
						<div className="info">
							<h1>前端英雄榜</h1>
							<a onClick={this.handleClick.bind(this, dispatch)}>我要上榜</a>
						</div>
					</div>
				</header>

				<section className="friends container">
					<div className="row">
						{this.friendsList(friendship.datas)}
					</div>
				</section>

				<Modal {...modal} dispatch={dispatch} />
			</div>
		)
	}
}