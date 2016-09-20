import React, { Component } from 'react';
import { Link } from 'react-router';

import Mask from './Mask';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.handleBodyClick = this.handleBodyClick.bind(this);
		this.state = { showNav: window.innerWidth > 767 ? true : false };
	}

	componentDidMount() {
		this.refs.switchIcon.addEventListener('click', this.switchNav.bind(this), false);
		this.refs.appHeader.addEventListener('click', this.handleHeaderClick, false);
		window.addEventListener('click', this.handleBodyClick, false);
	}

	componentWillUnmount() {
		this.refs.switchIcon.removeEventListener('click', this.switchNav.bind(this), false);
		this.refs.appHeader.removeEventListener('click', this.handleHeaderClick, false);		
		window.removeEventListener('click', this.handleBodyClick, false);
	}

	switchNav(e) {
		e.stopPropagation();
		this.setState({ showNav: !this.state.showNav });
	}

	handleHeaderClick(e) {
		let parentLink = e.target.closest('a');
		if(!(parentLink && parentLink.tagName === 'A'))
			e.stopPropagation();
	}

	handleBodyClick(e) {
		if(this.state.showNav)
			this.switchNav(e);
	}

	render() {
		let showNav = this.state.showNav;

		let isCurPath = path => {
			return location.pathname.split('/')[1] == path ? 'active' : null
		}

		return (
			<header id="app-header" ref="appHeader">
				<Mask {...this.props} />
				<div className="mobile-nav visible-xs-block">
					<h1><i className="fa fa-user"></i>小剧客栈</h1>
					<a ref="switchIcon" href="javascript:void(0);"><i className={`fa ${showNav?'fa-close':'fa-bars'}`}></i></a>
				</div>
				<nav className={`container ${showNav?'':'hidden-xs'}`}>
					<ul className="list-inline">
						<li><Link to="/" className={ isCurPath('') }><i className="fa fa-user"></i><span>小剧客栈</span></Link></li>
						<li><Link to="/blog" className={ isCurPath('blog') }><i className="fa fa-book visible-xs-inline"></i><span>博客</span></Link></li>
						<li><Link to="/labs" className={ isCurPath('labs') }><i className="fa fa-gitlab visible-xs-inline"></i><span>实验室</span></Link></li>
						<li><Link to="/comment" className={ isCurPath('comment') }><i className="fa fa-comments-o visible-xs-inline"></i><span>留言</span></Link></li>
					</ul>
					<Link to="/directories" target="_blank" className="hidden-xs">前端英雄榜</Link>
				</nav>
				<div className="mobile-directories visible-xs-block">
					<Link to="/directories" className={`${showNav?'':'hide'}`} target="_blank">前端英雄榜</Link>
				</div>
      </header>
		)
	}
}