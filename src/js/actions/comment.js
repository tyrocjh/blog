import {
	REQUEST_COMMENT,
	RECEIVE_COMMENT,
	COMMENT_PAGE } from '../constants/ActionTypes';

export function selectCommentPage(page) {
	return {
		type: COMMENT_PAGE,
		page
	}
}

function requestComment() {
	return {
		type: REQUEST_COMMENT
	}
}

function receiveComment(json) {
	return {
		type: RECEIVE_COMMENT,
		comment: json.datas
	}
}

function fetchComment() {
	return dispatch => {
		dispatch(requestComment());
		return (
			fetch('/api/comment')
				.then(response => response.json())
				.then(json => {
					dispatch(receiveComment(json))
				})
		)
	}
}

function shouldFetchComment(state, page) {
	console.info(state);
	const comment = state.commentByPage[page];

	if(comment.isFetching) {
		return false;
	}

	if(!comment) {
		return true;
	} else {
		return false;
	}
}

export function fetchCommentIfNeeded(page) {
	return (dispatch, getState) => {
		if(shouldFetchComment(getState(), page)) {
			return dispatch(fetchComment(page));
		}
	};
}