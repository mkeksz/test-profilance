import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { turnPopup } from '../store/actions/appActions'

export const Navbar = () => {
  const dispatch = useDispatch()

  return (
    <nav className="nav">
      <Link className="nav__link" to="/">
        Главная
      </Link>
      <Link className="nav__link" to="/news">
        Новости
      </Link>
      <span onClick={() => dispatch(turnPopup())} className="nav__link">
        Войти
      </span>
    </nav>
  )
}
