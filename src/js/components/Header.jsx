import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
	render() {
		let isCurPath = path => {
			return location.pathname == path ? 'active' : null
		}

		return (
			<header id="app-header">
				<nav className="container">
					<ul className="list-inline">
						<li><Link to="/" className={ isCurPath('/') }><i className="fa fa-user"></i><span>小剧客栈</span></Link></li>
						<li><Link to="/blog" className={ isCurPath('/blog') }>博客</Link></li>
						<li><Link to="/labs" className={ isCurPath('/labs') }>实验室</Link></li>
						<li><Link to="/bless" className={ isCurPath('/bless') }>留言</Link></li>
					</ul>
					<Link to="/">前端英雄榜</Link>
				</nav>
      </header>
		)
	}
}