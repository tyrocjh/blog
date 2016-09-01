import * as types from '../constants/ActionTypes';

function requestComment() {
	return {
		type: types.REQUEST_COMMENT
	}
}

function receiveComment(json) {
	return {
		type: types.RECEIVE_COMMENT,
		comment: json.datas
	}
}

export function fetchComment() {
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