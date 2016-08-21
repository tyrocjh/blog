import * as types from '../constants/ActionTypes';

const initialState = {
	inFetching: false,
	datas: []
}

export default function blogTags(state=initialState, action) {
	switch(action.type) {

		case types.REQUEST_BLOGTAGS:
			return Object.assign({}, state, {
				isFetching: true
			});

		case types.RECEIVE_BLOGTAGS:
			return Object.assign({}, state, {
				isFetching: false,
				datas: [...state.datas, ...action.blogTags]
			});

		default:
			return state;
	}
}