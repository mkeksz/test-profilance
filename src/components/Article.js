import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteNews, editNews } from '../store/actions/newsActions'

export const Article = ({ article }) => {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user.user)

  const onClickApprove = () => dispatch(editNews({ ...article, approved: true }))
  const onClickDelete = () => dispatch(deleteNews(article.id))

  return (
    <article className="article">
      <h2>{article.title}</h2>
      <p>{article.text}</p>
      {user && user.isAdmin && (
        <div>
          {!article.approved && (
            <button onClick={() => onClickApprove()} className="button">
              Принять
            </button>
          )}
          <button onClick={() => onClickDelete()} className="button">
            Удалить
          </button>
        </div>
      )}
    </article>
  )
}

Article.propTypes = {
  article: PropTypes.object.isRequired,
}
