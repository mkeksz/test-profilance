import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Main } from './views/Main'
import { News } from './views/News'
import { Navbar } from './components/Navbar'
import { PopupAuth } from './components/PopupAuth'

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/news" exact component={News} />
      </Switch>
      <PopupAuth />
    </>
  )
}

export default withRouter(App)
