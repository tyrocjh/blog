import * as types from '../constants/ActionTypes';

const initialState = {
	isFetching: false,
	data: {}
}

export default function blogArticle(state=initialState, action) {
	switch(action.type) {

		case types.REQUEST_BLOGARTICLE:
			return Object.assign({}, state, {
				isFetching: true
			});

		case types.RECEIVE_BLOGARTICLE:
			return Object.assign({}, state, {
				isFetching: false,
				data: action.blogArticle
			});

		default:
			return state;
	}
}