import React from 'react'
import { useSelector } from 'react-redux'

export const Main = () => {
  const user = useSelector((state) => state.user.user)

  return (
    <>
      <div className="page">
        <h2>Привет, {user ? user.login : 'Гость'}</h2>
      </div>
    </>
  )
}
