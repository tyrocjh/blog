import {
	REQUEST_COMMENT, RECEIVE_COMMENT,
	SELECT_PAGE, RECEIVE_PAGE } from '../constants/ActionTypes';

export function selectPage(page) {
	return {
		type: SELECT_PAGE,
		page
	}
}

function receivePage(page) {
	return {
		type: RECEIVE_PAGE,
		page
	}
}

function requestComment() {
	return {
		type: REQUEST_COMMENT
	}
}

function receiveComment(comment, page) {
	return {
		type: RECEIVE_COMMENT, 
		page,
		comment: comment
	}
}

function fetchComment(page) {
	return dispatch => {
		dispatch(requestComment());
		return (
			fetch('/api/comment')
				.then(response => response.json())
				.then(json => {
					dispatch(receiveComment(json.datas, page));
					dispatch(receivePage(json.page));
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