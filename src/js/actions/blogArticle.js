import { REQUEST_BLOGARTICLE, RECEIVE_BLOGARTICLE } from '../constants/ActionTypes';

function requestBlogArticle() {
	return {
		type: REQUEST_BLOGARTICLE
	}
}

function receiveBlogArticle(json) {
	return {
		type: RECEIVE_BLOGARTICLE,
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