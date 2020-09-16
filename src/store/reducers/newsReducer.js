import { ADD_NEWS, DELETE_NEWS, EDIT_NEWS, FETCH_NEWS } from '../types'

const initialState = {
  news: [],
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return { ...state, news: action.payload }
    case ADD_NEWS:
      const aNewArticles = [{ id: state.news.length, ...action.payload }, ...state.news]
      return { ...state, news: aNewArticles }
    case DELETE_NEWS:
      const dNewArticles = state.news.filter((i) => i.id !== action.payload)
      return { ...state, news: dNewArticles }
    case EDIT_NEWS:
      const idxTargetArticle = state.news.findIndex((i) => i.id === action.payload.id)
      const eNewArticles = [...state.news]
      eNewArticles[idxTargetArticle] = action.payload
      return { ...state, news: eNewArticles }
    default:
      return state
  }
}

export default newsReducer
