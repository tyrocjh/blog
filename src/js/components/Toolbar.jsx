import React, { Component } from 'react';

export default class Toolbar extends Component {
	constructor(props) {
		super(props);
		this.onScroll = this.onScroll.bind(this);
		this.state = { toTop: false };
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll, false);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll, false);
	}

	onScroll() {
		if(window.scrollY >= 400) {
			this.setState({ toTop: true });
		} else {
			this.setState({ toTop: false });
		}
	}

	handleClick() {	
		window.scrollTo(0, 0);
	}

	render() {
		const showToTop = this.state.toTop;

		return (
			<div className={`app-toolbar ${(showToTop ? '' : 'hide-bar')}`}>
				<a href="javascript:void(0)" className="to-top" onClick={this.handleClick}></a>
			</div>
		);
	}
}