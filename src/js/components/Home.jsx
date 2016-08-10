import React, { Component } from 'react';

export default class Home extends Component {
	render() {
		return (
			<div id="home">
				<div className="home-bg"></div>
				<section className="about-me">
					<div className="avatar"></div>
					<h3>我是喵星人</h3>
					<p>90后天蝎男，前端工程师，全栈开发尝试者</p>
					<div className="links">
						<a href="#"><i className="fa fa-github-alt"></i></a>
						<a href="#"><i className="fa fa-book"></i></a>
						<a href="#"><i className="fa fa-dribbble"></i></a>
					</div>
				</section>
			</div>
		)
	}
}