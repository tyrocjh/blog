import * as types from '../constants/ActionTypes';

function requestFriends() {
	return {
		type: types.REQUEST_FRIENDS
	}
}

function receiveFriends(json) {
	return {
		type: types.RECEIVE_FRIENDS,
		friends: json.datas
	}
}

export function fetchFriends() {
	return dispatch => {
		dispatch(requestFriends());
		return (
			fetch('/api/friends')
				.then(response => response.json())
				.then(json => {
					dispatch(receiveFriends(json));
				})
		)
	}
}