import * as types from '../constants/ActionTypes';

const initialState = {
	isFetching: false,
	datas: []
}

export default function friends(state=initialState, action) {
	switch(action.type) {

		case types.REQUEST_FRIENDS:
			return Object.assign({}, state, {
				isFetching: true
			});

		case types.RECEIVE_FRIENDS:
			return Object.assign({}, state, {
				isFetching: false,
				datas: [...state.datas, ...action.friends]
			});

		default:
			return state;
	}
}