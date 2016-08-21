import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

import BlogItem from './BlogItem';

export default class BlogList extends Component {
	render() {
		let bloglist = [1,1,1,1,1,1,1].map( () => <BlogItem /> );

		return (
			<section className="blog-list">
				<div className="container">
          <Masonry
            className={'row'}
            elementType={'div'}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false} >
            {bloglist}
          </Masonry>
				</div>
			</section>
		)
	}
}