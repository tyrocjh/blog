import * as types from '../constants/ActionTypes';

const initialState = {
  modalType: null,
  modalProps: {}
};

export default function modal(state=initialState, action) {
	switch(action.type) {

    case types.SHOW_MODAL:
      return {
        modalType: action.modalType,
        modalProps: action.modalProps
      }

    case types.HIDE_MODAL:
      return initialState

    default:
      return state
	}
}