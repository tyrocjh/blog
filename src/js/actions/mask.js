import { SHOW_MASK, HIDE_MASK } from '../constants/ActionTypes';

export function showMask(modalType, modalProps) {
	return {
		type: SHOW_MODAL
	}
}

export function hideMask() {
	return {
		type: HIDE_MODAL
	}
}