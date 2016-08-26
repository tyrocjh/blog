import React, { Component } from 'react';
import moment from 'moment';

import { fetchBlogArticle } from '../../actions/blogArticle';

export default class BlogArticle extends Component {
	constructor(props) {
		super(props);
		const { dispatch, blogArticle } = this.props;
		dispatch(fetchBlogArticle());
	}

	getTags(tags) {
		return tags && tags.map((tag, index) => {
			return (index == 0 ? '' : ', ') + tag
		});
	}

	getUrl() {
		return document.URL;
	}

	render() {
		const article = this.props.blogArticle.data;

		return (
			<div className="blog-article-page">
				<header>
					<div className="container">
						<h1>{article.title}</h1>
						<p>发布时间：{moment(parseInt(article.time_show)).format('YYYY-MM-DD')}</p>
						<div className="share-btn">
							<a href="javascript:void(0);" className="weibo"><i className="fa fa-weibo"></i></a>
							<a href="javascript:void(0);" className="twitter"><i className="fa fa-twitter"></i></a>
						</div>
					</div>
				</header>

				<section className="article-section">
					<div className="container">
						<article>{article.content}</article>
						<footer>
							<p><strong>tags：</strong><span>{this.getTags(article.tags)}</span></p>
							<p><strong>转载请注明来源：</strong>{this.getUrl()}</p>
						</footer>
					</div>
				</section>

				<section className="comment-section">
				</section>
			</div>
		)
	}
}