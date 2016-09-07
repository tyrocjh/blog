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

function requestComment(page) {
	return {
		type: REQUEST_COMMENT,
		page
	}
}

function receiveComment(json, page) {
	return {
		type: RECEIVE_COMMENT,
		page,
		comment: json.datas
	}
}

function fetchComment(page) {
	return dispatch => {
		dispatch(requestComment());
		return (
			fetch('/api/comment')
				.then(response => response.json())
				.then(json => {
					dispatch(receiveComment(json, page))
				})
		)
	}
}

function shouldFetchComment(state, page) {
	const comment = state.commentByPage[page];

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