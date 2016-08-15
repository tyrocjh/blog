import * as types from '../constants/ActionTypes';

function requestLabs() {
	return {
		type: types.REQUEST_LABS
	}
}

function receiveLabs(json) {
	return {
		type: types.RECEIVE_LABS,
		labs: [{ a:1, b:2 }]
	}
}

export function fetchLabs() {
	return dispatch => {
		dispatch(requestLabs());
		return (
			fetch('labs.json', { method: 'GET' })
				.then(response => response.json())
				.then(json => {
					console.info(json);
					dispatch(receiveLabs(json))
				})
		)
	}
}

// export function fetchLabsIfNeeded() {
// 	return (dispatch, getState) => {
// 		return dispatch(fetchLabs());
// 	}
// }