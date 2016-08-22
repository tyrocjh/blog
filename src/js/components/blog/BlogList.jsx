import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

import { fetchBlogs } from '../../actions/blogs';
import BlogItem from './BlogItem';

export default class BlogList extends Component {
	constructor(props) {
		super(props);
		const { dispatch } = props;
		dispatch(fetchBlogs());
	}

	render() {
		const { blogs } = this.props;

		let blogList = blogs.datas.map((data, index) => {
			return (
				<BlogItem key={index} blog={data} />
			)
		});

		return (
			<section className="blog-list">
				<div className="container">
          <Masonry
            className={'row'}
            elementType={'div'}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false} >
            {blogList}
          </Masonry>
				</div>
			</section>
		)
	}
}