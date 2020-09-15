import { TURN_POPUP } from '../types'

const initialState = {
  showPopup: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TURN_POPUP:
      return { ...state, showPopup: !state.showPopup }
    default:
      return state
  }
}

export default appReducer
