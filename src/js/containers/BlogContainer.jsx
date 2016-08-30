import React, { Component } from 'react';
import { connect } from 'react-redux';

import DeviceMac from '../components/device/DeviceMac';
import BlogTags from '../components/blog/BlogTags';
import BlogList from '../components/blog/BlogList';
import BlogArticle from '../components/blog/BlogArticle';

class BlogContainer extends Component {
	render() {
		const id = this.props.params.id;
		if(!id) {
			return (
				<div className="blog-page">
					<header>
						<DeviceMac />
					</header>
					<BlogTags {...this.props} />
					<BlogList {...this.props} />
				</div>
			)			
		} else {
			return (
				<BlogArticle {...this.props} />
			)
		}
	}
}

function mapStateToProps(state) {
	const { blogs, blogTags, blogArticle, modal } = state;

	return {
		blogs,
		blogTags,
		blogArticle,
		modal
	}
}

export default connect(mapStateToProps)(BlogContainer);