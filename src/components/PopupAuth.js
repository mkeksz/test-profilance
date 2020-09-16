import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { turnPopupAuth } from '../store/actions/appActions'
import { fetchUser } from '../store/actions/userActions'

export const PopupAuth = () => {
  const dispatch = useDispatch()

  const showPopup = useSelector((state) => state.app.showPopupAuth)

  const [showError, setShowError] = useState(false)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const users = [
    {
      id: 1,
      login: 'admin',
      password: 'admin',
      isAdmin: true,
    },
    {
      id: 2,
      login: 'user',
      password: 'user',
      isAdmin: false,
    },
  ]

  const onChangeInput = (e) => {
    const { name, value } = e.currentTarget
    if (name === 'login') setLogin(value)
    else if (name === 'password') setPassword(value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const user = users.find((user) => user.login === login && user.password === password)
    if (!user) {
      setShowError(true)
      return
    }
    dispatch(fetchUser(user))
    onClickClose()
  }
  const onClickClose = () => {
    setShowError(false)
    setLogin('')
    setPassword('')
    dispatch(turnPopupAuth())
  }

  return (
    <div className={`popup ${showPopup && 'popup__show'}`}>
      <div className="window">
        <h4 className="window__title">Авторизация</h4>
        <div className="form">
          <form onSubmit={(e) => onSubmit(e)}>
            <input
              onChange={(e) => onChangeInput(e)}
              value={login}
              name="login"
              className="input"
              type="text"
              placeholder="Введите логин"
              maxLength="50"
            />
            <input
              onChange={(e) => onChangeInput(e)}
              value={password}
              name="password"
              className="input"
              autoComplete="on"
              type="password"
              placeholder="Введите пароль"
              maxLength="50"
            />
            <small className="form__error" style={{ display: showError ? 'inline' : 'none' }}>
              Логин или пароль введен неверно!
            </small>
            <div className="form__buttons">
              <button className="button" type="submit">
                Войти
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
