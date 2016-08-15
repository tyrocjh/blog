import * as types from '../constants/ActionTypes';

const initialState = {
	isFetching: false,
	datas: []
};

export default function labs(state=initialState, action) {
	switch(action.type) {
		
		case types.REQUEST_LABS:
			return Object.assign({}, state, {
				isFetching: true
			});

		case types.RECEIVE_LABS:
			return Object.assign({}, state, {
				isFetching: false,
				datas: [...state.datas, ...action.labs]
			});

		default:
			return state;
	}
}