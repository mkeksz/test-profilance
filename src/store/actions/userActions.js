import { FETCH_USER } from '../types'

export function fetchUser(user) {
  return { type: FETCH_USER, payload: user }
}
