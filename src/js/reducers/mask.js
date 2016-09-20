import { SHOW_MASK, HIDE_MASK } from '../constants/ActionTypes';

export default function mask(state=false, action) {
	switch(action.type) {

    case SHOW_MASK:
      return true

    case HIDE_MASK:
      return false

    default:
      return state
	}
}