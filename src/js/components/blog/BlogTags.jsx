import React, { Component } from 'react';

export default class BlogTags extends Component {
	render() {
		return (
			<section className="blog-tags container">
				<a href="javascript:void(0)" className="active">全部标签</a>
				<a href="javascript:void(0)">javascript<span>4</span></a>
				<a href="javascript:void(0)">作品<span>12</span></a>
				<a href="javascript:void(0)">剧中人<span>5</span></a>
				<a href="javascript:void(0)">设计<span>6</span></a>
				<a href="javascript:void(0)">jQuery<span>8</span></a>
				<a href="javascript:void(0)">生活<span>15</span></a>
				<a href="javascript:void(0)">分享<span>11</span></a>
				<a href="javascript:void(0)">前端<span>4</span></a>
				<a href="javascript:void(0)">工具<span>2</span></a>
			</section>
		)
	}
}