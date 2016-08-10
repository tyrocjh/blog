import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<header id="app-header">
				<nav className="container">
					<ul className="list-inline">
						<li><a href="#" className="active"><i className="fa fa-user"></i><span>小剧客栈</span></a></li>
						<li><a href="#">博客</a></li>
						<li><a href="#">实验室</a></li>
						<li><a href="#">留言</a></li>
					</ul>
					<a href="#">前端英雄榜</a>
				</nav>
      </header>
		)
	}
}