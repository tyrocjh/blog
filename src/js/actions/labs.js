import * as types from '../constants/ActionTypes';

function requestLabs() {
	return {
		type: types.REQUEST_LABS
	}
}

function receiveLabs(json) {
	return {
		type: types.RECEIVE_LABS,
		labs: json.datas
	}
}

export function fetchLabs() {
	return dispatch => {
		dispatch(requestLabs());
		return (
			fetch('/api/labs')
				.then(response => response.json())
				.then(json => {
					dispatch(receiveLabs(json))
				})
		)
	}
}