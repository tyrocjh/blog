import React, { Component } from 'react';

import BlogItem from './BlogItem';

export default class BlogList extends Component {
	render() {
		let bloglist = [1,1,1,1,1,1,1].map( () => <BlogItem /> );

		return (
			<section className="blog-list">
				<div className="container">
					{bloglist}
				</div>
			</section>
		)
	}
}