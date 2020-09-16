import { ADD_NEWS, FETCH_NEWS } from '../types'

const initialState = {
  news: null,
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return { ...state, news: action.payload }
    case ADD_NEWS:
      const newArticles = [{ id: state.news.length, ...action.payload }, ...state.news]
      return { ...state, news: newArticles }
    default:
      return state
  }
}

export default newsReducer
