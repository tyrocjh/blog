import { REQUEST_BLOGARTICLE, RECEIVE_BLOGARTICLE } from '../constants/ActionTypes';

const initialState = {
	isFetching: false,
	data: {}
}

export default function blogArticle(state=initialState, action) {
	switch(action.type) {

		case REQUEST_BLOGARTICLE:
			return Object.assign({}, state, {
				isFetching: true
			});

		case RECEIVE_BLOGARTICLE:
			return Object.assign({}, state, {
				isFetching: false,
				data: action.blogArticle
			});

		default:
			return state;
	}
}