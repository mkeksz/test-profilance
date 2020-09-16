import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Article } from '../components/Article'
import { turnPopupArticle } from '../store/actions/appActions'

export const News = () => {
  const dispatch = useDispatch()

  const [storeNews, user] = useSelector((state) => [state.news.news, state.user.user])
  const [news, setNews] = useState([])
  const [searchNews, setSearchNews] = useState(news)
  const [textSearch, setTextSearch] = useState('')

  const articles = textSearch ? searchNews : news

  useEffect(() => {
    // let filteredNews = storeNews.slice(0, 100)
    let filteredNews = storeNews

    if (user && !user.isAdmin)
      filteredNews = filteredNews.filter((i) => i.approved || i.authorId === user.id)
    else if (!user) filteredNews = filteredNews.filter((i) => i.approved)

    setNews(filteredNews)
  }, [storeNews, user])

  useEffect(() => {
    setSearchNews(
      news.filter(
        (i) =>
          i.title.toLowerCase().includes(textSearch.toLowerCase().trim()) ||
          i.text.toLowerCase().includes(textSearch.toLowerCase().trim()),
      ),
    )
  }, [textSearch, news])

  const onClickNewArticle = () => dispatch(turnPopupArticle())
  const onChangeInput = (e) => setTextSearch(e.currentTarget.value)

  return (
    <>
      <div className="page">
        {user && (
          <div className="page__buttons">
            <button onClick={() => onClickNewArticle()} className="button">
              Добавить новость
            </button>
          </div>
        )}
        <div className="search">
          <input
            onChange={(e) => onChangeInput(e)}
            value={textSearch}
            name="textSearch"
            className="input"
            type="text"
            placeholder="Поиск..."
            maxLength="50"
          />
        </div>
        <div className="articles">
          {articles.map((i) => (
            <Article key={i.id} article={i} />
          ))}
        </div>
      </div>
    </>
  )
}
