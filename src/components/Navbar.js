import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { turnPopupAuth } from '../store/actions/appActions'
import { fetchUser } from '../store/actions/userActions'

export const Navbar = () => {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user.user)

  const public_url = process.env.PUBLIC_URL

  return (
    <nav className="nav">
      <Link className="nav__link" to={public_url + '/'}>
        Главная
      </Link>
      <Link className="nav__link" to={public_url + '/news'}>
        Новости
      </Link>
      {user ? (
        <span onClick={() => dispatch(fetchUser(null))} className="nav__link">
          Выйти
        </span>
      ) : (
        <span onClick={() => dispatch(turnPopupAuth())} className="nav__link">
          Войти
        </span>
      )}
    </nav>
  )
}
