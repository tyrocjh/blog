import * as types from '../constants/ActionTypes';

function requestBlogArticle() {
	return {
		type: types.REQUEST_BLOGARTICLE
	}
}

function receiveBlogArticle(json) {
	return {
		type: types.RECEIVE_BLOGARTICLE,
		blogArticle: json.data
	}
}

export function fetchBlogArticle() {
	return dispatch => {
		dispatch(requestBlogArticle());

		return (
			fetch('/api/blog/1506bf6a3f8')
				.then(response => response.json())
				.then(json => {
					dispatch(receiveBlogArticle(json));
				})
		)
	}
}