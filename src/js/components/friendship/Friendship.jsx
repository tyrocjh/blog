import React, { Component } from 'react';

import { fetchFriends } from '../../actions/friendship';

export default class Friendship extends Component {
	constructor(props) {
		super(props);
		const { dispatch, friendship } = this.props;
		if(friendship.datas.length == 0)
			dispatch(fetchFriends());
	}

	friendsList(friends) {
		return friends.map(friend => {
			return <div>{friend.name}</div>
		});
	}

	render() {
		const { friendship } = this.props;

		return (
			<div className="friendship">
				<header>
					<div className="container">
						<div className="nav">
							<a href="/">回到首页</a>
						</div>
						<div className="info">
							<h1>前端英雄榜</h1>
							<a href="javascript:void(0);">我要上榜</a>
						</div>
					</div>
				</header>

				<section className="friends container">
					{this.friendsList(friendship.datas)}
				</section>
			</div>
		)
	}
}