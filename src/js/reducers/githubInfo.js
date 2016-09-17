import { REQUEST_GITHUBINFO, RECEIVE_GITHUBINFO } from '../constants/ActionTypes';

const initialState = {
	isFetching: false,
	data: null
}

export default function githubInfo(state=initialState, action) {
	switch(action.type) {

		case REQUEST_GITHUBINFO:
			return Object.assign({}, state, {
				isFetching: true
			});

		case RECEIVE_GITHUBINFO:
			return Object.assign({}, state, {
				isFetching: false,
				data: action.githubInfo
			});

		default:
			return state;
	}
}