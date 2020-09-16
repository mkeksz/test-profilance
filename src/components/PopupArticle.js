import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { turnPopupArticle } from '../store/actions/appActions'
import { addNews } from '../store/actions/newsActions'

export const PopupArticle = () => {
  const dispatch = useDispatch()

  const [showPopup, user] = useSelector((state) => [state.app.showPopupArticle, state.user.user])
  const [showError, setShowError] = useState(false)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const onChangeInput = (e) => {
    const { name, value } = e.currentTarget
    if (name === 'title') setTitle(value)
    else if (name === 'text') setText(value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !text.trim()) {
      setShowError(true)
      return
    }
    dispatch(
      addNews({ title: title.trim(), text: text.trim(), approved: false, authorId: user.id }),
    )
    dispatch(turnPopupArticle())
  }
  const onClickClose = () => {
    setShowError(false)
    dispatch(turnPopupArticle())
  }

  return (
    <div className={`popup ${showPopup && 'popup__show'}`}>
      <div className="window">
        <h4 className="window__title">Новая новость</h4>
        <div className="form">
          <form onSubmit={(e) => onSubmit(e)}>
            <input
              onChange={(e) => onChangeInput(e)}
              value={title}
              name="title"
              className="input"
              type="text"
              placeholder="Введите заголовок"
              maxLength="50"
            />
            <textarea
              onChange={(e) => onChangeInput(e)}
              name="text"
              value={text}
              className="input"
              placeholder="Введите текст новости"
              maxLength="500"
            />
            <small className="form__error" style={{ display: showError ? 'inline' : 'none' }}>
              Заполните все поля перед отправкой!
            </small>
            <div className="form__buttons">
              <button className="button" type="submit">
                Отправить
              </button>
              <button onClick={() => onClickClose()} type="button" className="button">
                Отмена
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
