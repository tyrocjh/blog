import React, { Component } from 'react';

import { fetchBlogTags } from '../../actions/blogTags';
import stickify from '../Stickify';

class BlogTags extends Component {
	constructor(props) {
		super(props);
		const { dispatch } = this.props;
		dispatch(fetchBlogTags());
	}

	render() {
		const { blogTags, sticky } = this.props;

		let blogTagsList = blogTags.datas.map((data, index) => {
			return (
				<a key={index} href="javascript:void(0)">{data.name}<span>{data.count}</span></a>
			)
		});

		return (
			<section className={`blog-tags ${(sticky ? 'sticky' : '')}`}>
				<div className="container">
					<a href="javascript:void(0)" className="active">全部标签</a>
					{blogTagsList}
				</div>
			</section>
		)
	}
}

function getScrollHeight() {
	var selector = document.querySelector('.blog-page header');

	return selector.offsetHeight;
}

export default stickify(BlogTags, getScrollHeight);