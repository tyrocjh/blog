import React, { Component } from 'react';
import Device from '../components/device/Device';

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

				<section className="about-design">
					<h3>尝试实现响应式设计</h3>
					<p>配合单页架构提升使用体验</p>
					<div className="links">
						<span>单页组件</span>
						<a href="#">lofox.js</a>
						<a href="#">iframer</a>
					</div>
					<Device />
				</section>

				<section className="about-backend">
					<div className="language">
						<div className="nodejs-logo"></div>
						<p>NODEJS强力驱动</p>
					</div>
					<div className="framework">
						<p>无耻地没有使用以下框架</p>
						<p>
							<span>express hexo bones rrestjs koa hapi</span>
							<a href="#">博客源码</a>
						</p>
					</div>
				</section>

				<section className="about-links">
					<a href="#" className="btn">关于剧中人</a>
					<a href="#" className="btn">关于小剧客栈</a>
				</section>
			</div>
		)
	}
}