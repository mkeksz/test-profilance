import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Main } from './views/Main'
import { News } from './views/News'
import { Navbar } from './components/Navbar'
import { PopupAuth } from './components/PopupAuth'
import { fetchNews } from './store/actions/newsActions'
import { PopupArticle } from './components/PopupArticle'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/news" exact component={News} />
      </Switch>
      <PopupAuth />
      <PopupArticle />
    </>
  )
}

export default withRouter(App)
