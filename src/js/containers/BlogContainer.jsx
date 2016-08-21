import React, { Component } from 'react';
import { connect } from 'react-redux';

import DeviceMac from '../components/device/DeviceMac';
import BlogTags from '../components/blog/BlogTags';
import BlogList from '../components/blog/BlogList';

class BlogContainer extends Component {
	render() {
		return (
			<div className="blog-page">
				<header>
					<DeviceMac />
				</header>
				<BlogTags {...this.props} />
				<BlogList />
			</div>
		)
	}
}

function mapStateToProps(state) {
	const { blogs, blogTags } = state;

	return {
		blogs,
		blogTags
	}
}

export default connect(mapStateToProps)(BlogContainer);