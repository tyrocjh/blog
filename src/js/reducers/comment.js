import {
	REQUEST_COMMENT,
	RECEIVE_COMMENT,
	COMMENT_PAGE } from '../constants/ActionTypes';

export function commentPage(state=1, action) {
	switch(action.type) {
		case COMMENT_PAGE:
			return action.page;
		default:
			return state;
	}
}

function comment(state = {
	isFetching: false,
	totalCount: 0,
	datas: []
}, action) {
	switch(action.type) {
		case REQUEST_COMMENT:
			return Object.assign({}, state, {
				isFetching: true
			});
		case RECEIVE_COMMENT:
			return Object.assign({}, state, {
				isFetching: false,
				datas: action.comment
			});
		default:
			return state;
	}
}

export function commentByPage(state={}, action) {
	console.info(action.page);
	switch(action.type) {
		case REQUEST_COMMENT:
		case RECEIVE_COMMENT:
			return Object.assign({}, state, {
				[action.page]: comment(state[action.page], action)
			});
		default:
			return state;
	}
}