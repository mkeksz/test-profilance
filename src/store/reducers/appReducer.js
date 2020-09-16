import { TURN_POPUP_ARTICLE, TURN_POPUP_AUTH } from '../types'

const initialState = {
  showPopupAuth: false,
  showPopupArticle: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TURN_POPUP_AUTH:
      return { ...state, showPopupAuth: !state.showPopupAuth }
    case TURN_POPUP_ARTICLE:
      return { ...state, showPopupArticle: !state.showPopupArticle }
    default:
      return state
  }
}

export default appReducer
