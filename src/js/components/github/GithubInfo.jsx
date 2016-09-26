import React, { Component } from 'react';

export default class extends Component {
	render() {
		const githubInfo = this.props.githubInfo.data || {};

		return (
			<div className="github-info">
				<header>
					<i className="fa fa-github-alt"></i>
					<img src={githubInfo.avatar_url} />
				</header>
				<section>
					<h3>喵星人在Github</h3>
					<a href={githubInfo.html_url} target="_blank"><i className="fa fa-user"></i>Follow me</a>
				</section>
				<footer className="clearfix">
					<a href={githubInfo.html_url} target="_blank" className="col-sm-4 col-xs-4"><strong>{githubInfo.followers}</strong><p>Followers</p></a>
					<a href={githubInfo.html_url} target="_blank" className="col-sm-4 col-xs-4"><strong>{githubInfo.public_repos}</strong><p>Repos</p></a>
					<a href={githubInfo.html_url} target="_blank" className="col-sm-4 col-xs-4"><strong>{githubInfo.following}</strong><p>Following</p></a>
				</footer>
			</div>
		)
	}
}