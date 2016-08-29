import React, { Component } from 'react';

export default class FriendshipItem extends Component {
	render() {
		const { friend } = this.props;

		return (
			<div className="col-md-4 col-sm-6 col-xs-12">
				<div className="card">
					<div className="name">
						<img src="images/default.jpg" />
						<span>{friend.name}</span>
					</div>
					<p>{friend.info}</p>
					<div className="links">
						<a href={friend.blog} target="_blank">博</a>
						<a href={friend.github} target="_blank">T</a>
					</div>
				</div>
			</div>
		)
	}
}