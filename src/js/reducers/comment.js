import * as types from '../constants/ActionTypes';

const initialState = {
	isFetching: false,
	datas: []
};

export default function comment(state=initialState, action) {
	switch(action.type) {
		
		case types.REQUEST_COMMENT:
			return Object.assign({}, state, {
				isFetching: true
			});

		case types.RECEIVE_COMMENT:
			return Object.assign({}, state, {
				isFetching: false,
				datas: action.comment
			});

		default:
			return state;
	}
}