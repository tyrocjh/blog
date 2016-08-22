import * as types from '../constants/ActionTypes';

function requestBlogs() {
	return {
		type: types.REQUEST_BLOGS
	}
}

function receiveBlogs(json) {
	return {
		type: types.RECEIVE_BLOGS,
		blogs: json.datas
	}
}

function fetchBlogs() {
	return dispatch => {
		dispatch(requestBlogs());

		return (
			fetch('/api/blogs')
				.then(response => response.json())
				.then(json => {
					dispatch(receiveBlogs(json));
				})
		)
	}
}

export function fetchBlogsIfNeeded(blogs) {
	return dispatch => {
		if(!blogs.isFetching)
 			return dispatch(fetchBlogs());
 	}
}