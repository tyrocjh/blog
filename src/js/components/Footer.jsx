import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<footer id="app-footer">
				<div className="container">
					<section className="col-sm-12 col-md-6">
						<h3>小剧客栈</h3>
						<p>小剧客栈是剧中人在成长路上的一个缩影，也希望借此结交更多前辈好友。分享小剧在前端、nodeJS、设计和web的各个细节上的点点滴滴，愿与你共同分享，一起进步！</p>
					</section>
					<section className="col-sm-6 col-md-3">
						<h3>相关链接</h3>
						<ul className="list-unstyled">
							<li><a href="#">博文</a></li>
							<li><a href="#">实验室</a></li>
							<li><a href="#">创业团</a></li>
							<li><a href="#">前端英雄榜</a></li>
						</ul>
					</section>
					<section className="col-sm-6 col-md-3">
						<h3>关于</h3>
						<ul className="list-inline">
							<li><a href="#">关于剧中人</a></li>
							<li><a href="#">关于小剧客栈</a></li>
						</ul>
						<p className="about-me">
							<a href="#"><i className="fa fa-user"></i></a>
							<a href="#"><i className="fa fa-github-alt"></i></a>
							<a href="#"><i className="fa fa-book"></i></a>
							<a href="#"><i className="fa fa-dribbble"></i></a>
						</p>
					</section>
					<section className="col-sm-12 copy-right">
						<p>design & code by @剧中人,base on nodeJS + mongoDB</p>
						<p>© 2012-2015。感谢七牛云存储提供静态资源空间。</p>
					</section>
				</div>
			</footer>
		)
	}
}