import { ADD_NEWS, FETCH_NEWS } from '../types'

export function fetchNews() {
  const news = [
    {
      id: 0,
      title: 'Новость 1',
      text: 'Тест новости админа',
      approved: true,
      authorId: 1,
    },
    {
      id: 1,
      title: 'Новость 2',
      text: 'Тест новости админа',
      approved: true,
      authorId: 1,
    },
    {
      id: 2,
      title: 'Новость 3',
      text: 'Новость пользователя',
      approved: true,
      authorId: 2,
    },
  ]
  return { type: FETCH_NEWS, payload: news }
}

export function addNews(article) {
  return { type: ADD_NEWS, payload: article }
}
