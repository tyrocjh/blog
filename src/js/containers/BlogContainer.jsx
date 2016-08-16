import React, { Component } from 'react';

import DeviceMac from '../components/device/DeviceMac';
import BlogTags from '../components/blog/BlogTags';
import BlogList from '../components/blog/BlogList';

export default class BlogContainer extends Component {
	render() {
		return (
			<div className="blog-page">
				<header>
					<DeviceMac />
				</header>
				<BlogTags />
				<BlogList />
			</div>
		)
	}
}