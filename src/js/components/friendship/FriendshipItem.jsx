import React, { Component } from 'react';

export default class FriendshipItem extends Component {
	render() {
		const { friend } = this.props;

		return (
			<div className="col-md-4 col-sm-6 col-xs-12">
				<div className="card row">
					<span>{friend.name}</span>
					<p>{friend.info}</p>
					<div className="links">
						<a href={friend.blog}>博</a>
						<a href={friend.github}>T</a>
					</div>
				</div>
			</div>
		)
	}
}