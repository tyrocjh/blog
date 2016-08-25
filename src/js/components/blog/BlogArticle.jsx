import React, { Component } from 'react';

import { fetchBlogArticle } from '../../actions/blogArticle';

export default class BlogArticle extends Component {
	constructor(props) {
		super(props);
		const { dispatch, blogArticle } = this.props;
		dispatch(fetchBlogArticle());
	}

	render() {
		const { blogArticle } = this.props;
		console.info(blogArticle);

		return (
			<div>article</div>
		)
	}
}