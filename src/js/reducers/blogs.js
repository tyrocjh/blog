import * as types from '../constants/ActionTypes';

const initialState = {
	isFetching: false,
	datas: []
}

export default function blogs(state=initialState, action) {
	switch(action.type) {

		case types.REQUEST_BLOGS:
			return Object.assign({}, state, {
				isFetching: true
			});

		case types.RECEIVE_BLOGS:
			return Object.assign({}, state, {
				isFetching: false,
				datas: [...state.datas, ...action.blogs]
			});

		default:
			return state;
	}
}