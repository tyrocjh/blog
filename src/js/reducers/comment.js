import {
	REQUEST_COMMENT, RECEIVE_COMMENT,
	SELECT_PAGE, RECEIVE_PAGE } from '../constants/ActionTypes';

export function pagination(state = {
	currentPage: 1,
	totalCount: 0,
	pageCount: 0,
	pageRange: 0,
}, action) {
	switch(action.type) {
		case SELECT_PAGE:
			return Object.assign({}, state, {
				currentPage: action.page
			});
		case RECEIVE_PAGE:
			return action.page;
		default:
			return state;
	}
}

function comment(state = {
	isFetching: false,
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