import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Article } from '../components/Article'
import { turnPopupArticle } from '../store/actions/appActions'

export const News = () => {
  const dispatch = useDispatch()

  const [storeNews, user] = useSelector((state) => [state.news.news, state.user.user])
  const [news, setNews] = useState([])

  useEffect(() => {
    let filteredNews = storeNews

    if (user && !user.isAdmin)
      filteredNews = filteredNews.filter((i) => i.approved || i.authorId === user.id)
    else if (!user && filteredNews) filteredNews = filteredNews.filter((i) => i.approved)

    setNews(filteredNews)
  }, [storeNews, user])

  const onClickNewArticle = () => dispatch(turnPopupArticle())

  return (
    <>
      <div className="news-page">
        {user && (
          <div className="news-page__buttons">
            <button onClick={() => onClickNewArticle()} className="button">
              Добавить новость
            </button>
          </div>
        )}
        <div className="articles">
          {news && news.map((i) => <Article key={i.id} title={i.title} text={i.text} />)}
        </div>
      </div>
    </>
  )
}
