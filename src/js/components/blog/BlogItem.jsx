import React, { Component } from 'react';
import moment from 'moment';

export default class BlogItem extends Component {
	render() {
		const { blog } = this.props;

		let tags = blog.tags.map((tag, index) => {
			return (
				<a key={index} href="#">{tag}</a>
			)
		});

		return (
			<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
				<div className="blog-item">
					<a href="#" className={`${(blog.cover ? '' : 'bg')}`}>
						<img src={blog.cover} />
						<h3 className="title">{blog.title}</h3>
						<p className="intro">{blog.intro}</p>
					</a>
					<footer>
						<div className="tags">
							<strong>tags</strong>
							{tags}
						</div>
						<div className="date">{moment(parseInt(blog.time_show)).format('MM-DD-YYYY')}</div>
					</footer>
				</div>
			</div>
		)
	}
}