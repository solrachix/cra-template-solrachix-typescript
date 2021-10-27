import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function AuthRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => <div />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
