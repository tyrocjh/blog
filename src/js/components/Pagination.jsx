import React, { Component } from 'react';

export default class Pagination extends Component {
	changePage(page) {
		const { dispatch } = this.props;
		this.props.changePage(dispatch, page);
	}

	render() {
		const { currentPage, totalCount, pageCount, pageRange } = this.props;

		let pagination = [],
				queryParams = this.props.queryParams,
				extraMin = (pageCount - currentPage) < 3 ? pageRange - (pageCount - currentPage) : 0,
				preCount = (currentPage - pageRange - extraMin) > 0 ? (currentPage - pageRange - extraMin) : 1,
				nextCount = currentPage + 1,
				extraMax = pageRange > (currentPage - 1) ? pageRange - (currentPage - 1) : 0,
				maxCount = (currentPage + pageRange + extraMax > pageCount) ? pageCount : currentPage + pageRange + extraMax;

		if(totalCount > 0) {

			if(currentPage === 1) {
				pagination.push(<span key="page-pre" className="page-pre">上一页</span>);
			} else {
				pagination.push(<a href="javascript:void(0);" key="page-pre" className="page-pre" onClick={this.changePage.bind(this, currentPage - 1)}>上一页</a>);
			}

			while(preCount < currentPage) {
				pagination.push(<a href="javascript:void(0);" key={preCount} onClick={this.changePage.bind(this, preCount)}>{preCount}</a>);
				preCount++;
			}

			pagination.push(<span key={currentPage} className="page-current">{currentPage}</span>);

			while(nextCount <= maxCount) {
				pagination.push(<a href="javascript:void(0);" key={nextCount} onClick={this.changePage.bind(this, nextCount)}>{nextCount}</a>);
				nextCount++;
			}

			if(currentPage === pageCount) {
				pagination.push(<span key="page-next" className="page-next">下一页</span>);
			} else {
				pagination.push(<a href="javascript:void(0);" key="page-next" className="page-next" onClick={this.changePage.bind(this, currentPage + 1)}>下一页</a>);
			}

		}

		return (
			<div className="pagination">
				{pagination}
			</div>
		)
	}
}