import { REQUEST_GITHUBINFO, RECEIVE_GITHUBINFO } from '../constants/ActionTypes';

function requestGithubInfo() {
	return {
		type: REQUEST_GITHUBINFO
	}
}

function receiveGithubInfo(json) {
	return {
		type: RECEIVE_GITHUBINFO,
		githubInfo: json
	}
}

function fetchGithubInfo() {
	return dispatch => {
		dispatch(requestGithubInfo());

		return (
			fetch('https://api.github.com/users/tyrocjh')
				.then(response => response.json())
				.then(json => {
					console.info(json);
					dispatch(receiveGithubInfo(json));
				})
		)
	}
}

function shouldFetchGithubInfo(state) {
	const info = state.githubInfo.data;
	console.info(info);

	if(!info) {
		return true;
	} else {
		return false;
	}
}

export function fetchGithubInfoIfNeeded() {
	return (dispatch, getState) => {
		if(shouldFetchGithubInfo(getState())) {
			return dispatch(fetchGithubInfo());
		}
	};
}