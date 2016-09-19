import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = { showNav: window.innerWidth > 767 ? true : false };
	}

	handleClick() {
		this.setState({ showNav: !this.state.showNav });
	}

	render() {
		let showNav = this.state.showNav;

		let isCurPath = path => {
			return location.pathname.split('/')[1] == path ? 'active' : null
		}

		return (
			<header id="app-header">
				<div className="mobile-nav visible-xs-12">
					<h1><i className="fa fa-user"></i>小剧客栈</h1>
					<a href="javascript:void(0);" onClick={this.handleClick.bind(this)}><i className={`fa ${showNav?'fa-close':'fa-bars'}`}></i></a>
				</div>
				<nav className={`container ${showNav?'':'hidden-xs'}`}>
					<ul className="list-inline col-xs-12">
						<li className="col-xs-12"><Link to="/" className={ isCurPath('') }><i className="fa fa-user"></i><span>小剧客栈</span></Link></li>
						<li className="col-xs-12"><Link to="/blog" className={ isCurPath('blog') }><i className="fa fa-book visible-xs-12"></i><span>博客</span></Link></li>
						<li className="col-xs-12"><Link to="/labs" className={ isCurPath('labs') }><i className="fa fa-gitlab visible-xs-12"></i><span>实验室</span></Link></li>
						<li className="col-xs-12"><Link to="/comment" className={ isCurPath('comment') }><i className="fa fa-comments-o visible-xs-12"></i><span>留言</span></Link></li>
					</ul>
					<Link to="/directories" className="hidden-xs" target="_blank">前端英雄榜</Link>
				</nav>
				<div className={`mobile-directories ${showNav?'':'hidden-xs'}`}>
					<Link to="/directories" target="_blank">前端英雄榜</Link>
				</div>
      </header>
		)
	}
}