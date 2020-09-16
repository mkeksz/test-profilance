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

  const public_url = process.env.PUBLIC_URL

  useEffect(() => dispatch(fetchNews()), [dispatch])

  return (
    <>
      <Navbar />
      <Switch>
        <Route path={public_url + '/'} exact component={Main} />
        <Route path={public_url + '/news'} component={News} />
      </Switch>
      <PopupAuth />
      <PopupArticle />
    </>
  )
}

export default withRouter(App)
