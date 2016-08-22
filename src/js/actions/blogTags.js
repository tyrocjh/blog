import * as types from '../constants/ActionTypes';

function requestBlogTags() {
	return {
		type: types.REQUEST_BLOGTAGS
	}
}

function receiveBlogTags(json) {
	return {
		type: types.RECEIVE_BLOGTAGS,
		blogTags: json.datas
	}
}

export function fetchBlogTags() {
	return dispatch => {
		dispatch(requestBlogTags());
		return (
			fetch('/api/blogTags')
				.then(response => response.json())
				.then(json => {
					dispatch(receiveBlogTags(json));
				})
		)
	}
}