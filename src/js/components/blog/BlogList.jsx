import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

import lazyLoad from '../LazyLoad';
import { fetchBlogsIfNeeded } from '../../actions/blogs';
import BlogItem from './BlogItem';

class BlogList extends Component {
	constructor(props) {
		super(props);
		const { dispatch, blogs } = props;
		dispatch(fetchBlogsIfNeeded(blogs));
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

function getTriggerHeight() {
	let blogListSelector = document.querySelector('.blog-list');

	let appFooterSelector = document.querySelector('#app-footer');

	return blogListSelector.offsetHeight - appFooterSelector.offsetHeight;
}

function triggerFunction() {
	return fetchBlogsIfNeeded;
}

export default lazyLoad(BlogList, getTriggerHeight, triggerFunction());