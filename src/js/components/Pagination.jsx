import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Pagination extends Component {
	render() {
		const { currentPage, totalCount, pageCount, pageRange } = this.props;

		let pagination = [],
				path = this.props.path,
				queryParams = this.props.queryParams,
				preCount = (currentPage - pageRange > 0) ? (currentPage - pageRange) : 1,
				nextCount = currentPage + 1,
				maxCount = (currentPage + pageRange > pageCount) ? pageCount : currentPage + pageRange;

		if(totalCount > 0) {

			if(currentPage === 1) {
				pagination.push(<span key="page-pre" className="page-pre">上一页</span>);
			} else {
				pagination.push(<Link key="page-pre" className="page-pre" to={path} query={Object.assign({}, queryParams, {page: currentPage - 1})}>上一页</Link>);
			}

			while(preCount < currentPage) {
				pagination.push(<Link key={preCount} to={path} query={Object.assign({}, queryParams, {page: preCount})}>{preCount}</Link>);
				preCount++;
			}

			pagination.push(<span key={currentPage} className="page-current">{currentPage}</span>);

			while(nextCount <= maxCount) {
				pagination.push(<Link key={nextCount} to={path} query={Object.assign({}, queryParams, {page: nextCount})}>{nextCount}</Link>);
				nextCount++;
			}

			if(currentPage === pageCount) {
				pagination.push(<span key="page-next" className="page-next">下一页</span>);
			} else {
				pagination.push(<Link key="page-next" className="page-next" to={path} query={Object.assign({}, queryParams, {page: currentPage + 1})}>下一页</Link>);
			}

		}

		return (
			<div className="pagination">
				{pagination}
			</div>
		)
	}
}