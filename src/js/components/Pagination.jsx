import React, { Component } from 'react';
import { Link } from 'react-router';
import { _ } from 'lodash';

export default class Pagination extends Component {
	render() {
		const { commentPage, totalCount, pageCount, pageRange } = this.props;

		let pagination = [],
				path = this.props.path,
				queryParams = this.props.queryParams,
				preCount = (commentPage - pageRange > 0) ? (commentPage - pageRange) : 1,
				nextCount = commentPage + 1,
				maxCount = (commentPage + pageRange > pageCount) ? pageCount : commentPage + pageRange;

		if(totalCount > 0) {

			if(commentPage === 1) {
				pagination.push(<span key="page-pre" className="page-pre">上一页</span>);
			} else {
				pagination.push(<Link key="page-pre" className="page-pre" to={path} query={_.merge(queryParams, {page: commentPage - 1})}>‹</Link>);
			}

			while(preCount < commentPage) {
				pagination.push(<Link key={preCount} to={path} query={_.merge(queryParams, {page: preCount})}>{preCount}</Link>);
				preCount++;
			}

			pagination.push(<span key={commentPage} className="page-current">{commentPage}</span>);

			while(nextCount <= maxCount) {
				pagination.push(<Link key={nextCount} to={path} query={_.merge(queryParams, {page: nextCount})}>{nextCount}</Link>);
				nextCount++;
			}

			if(commentPage === pageCount) {
				pagination.push(<span key="page-next" className="page-next">›</span>);
			} else {
				pagination.push(<Link key="page-next" className="page-next" to={path} query={_.merge(queryParams, {page: commentPage + 1})}>›</Link>);
			}

			pagination.push(<span key="total" className="page-total">{totalCount + '条/共' + pageCount + '页'}</span>);

		} else {
			pagination.push(<span key="none">暂无评论</span>);
		}

		return (
			<div className="pagination">
				{pagination}
			</div>
		);
	}
}