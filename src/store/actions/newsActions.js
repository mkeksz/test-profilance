import { ADD_NEWS, DELETE_NEWS, EDIT_NEWS, FETCH_NEWS } from '../types'

export function fetchNews() {
  const news = [
    {
      id: 0,
      title: 'Новость 3',
      text: 'Новость пользователя (не принята)',
      approved: false,
      authorId: 2,
      date: new Date(2020, 8, 15),
    },
    {
      id: 1,
      title: 'Новость 1',
      text: 'Новость админа',
      approved: true,
      authorId: 1,
      date: new Date(2020, 8, 14),
    },
    {
      id: 2,
      title: 'Новость 2',
      text: 'Новость пользователя',
      approved: true,
      authorId: 2,
      date: new Date(2020, 8, 10),
    },
  ]
  return { type: FETCH_NEWS, payload: news }
}

export function addNews(article) {
  return { type: ADD_NEWS, payload: article }
}
export function deleteNews(articleId) {
  return { type: DELETE_NEWS, payload: articleId }
}
export function editNews(article) {
  return { type: EDIT_NEWS, payload: article }
}
