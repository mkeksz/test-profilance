import { TURN_POPUP_ARTICLE, TURN_POPUP_AUTH } from '../types'

export function turnPopupAuth() {
  return { type: TURN_POPUP_AUTH }
}
export function turnPopupArticle() {
  return { type: TURN_POPUP_ARTICLE }
}
