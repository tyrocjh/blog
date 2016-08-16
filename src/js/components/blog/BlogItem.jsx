import React, { Component } from 'react';

export default class BlogItem extends Component {
	render() {
		return (
			<div className="blog-item">
				<a href="#">
					<img src="//dn-lay.qbox.me/blog/toucher/cover.jpg?imageView2/2/w/420/q/85" />
					<h3 className="title">单指手势事件的实现</h3>
					<p className="intro">伴随着移动端的发展，触摸交互的手势也越来越丰富，从起初最简单的点击发展到现在的长按、侧滑、拖动等，更为复杂的还会有双指缩放等事件。可以说，手势设计在移动页面上起到了简化界面元素，增加交互多样性的重要角色。</p>
				</a>
				<footer>
					<div className="tags">
						<strong>tags</strong>
						<a href="#">手势</a>
						<a href="#">javascript</a>
						<a href="#">前端</a>
						<a href="#">touch</a>
						<a href="#">toucher</a>
					</div>
					<div className="date">06-24 2015</div>
				</footer>
			</div>
		)
	}
}