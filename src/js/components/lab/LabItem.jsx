import React, { Component } from 'react';

export default class LabItem extends Component {
	render() {
		return (
			<div className="lab-item col-lg-3 col-md-4 col-sm-6">
				<a href="#">
					<img src="http://dn-lay.qbox.me/labs/loader.jpg?imageView/1/w/320/h/400/q/85" />
					<i className="fa fa-link"></i>
					<div className="info">
						<h4>loader-资源加载利器</h4>
						<p>loader是一个用于加载项目资源的工具，用于剥离文件间的耦合关系，提高模块加载效率。</p>
					</div>
				</a>
			</div>
		)
	}
}