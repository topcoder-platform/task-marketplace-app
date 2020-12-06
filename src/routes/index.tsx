import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ListView } from '../screens/list'
import { Config } from '../config'

// Here, more routes can be added
const routes = [
  {
    name: 'tasks',
    url: Config.APP_ROUTE,
    component: <ListView />,
    isExact: true,
    home: true
  }
]

/**
 * The wrapper component which defines the routes of the application
 */
export const RoutesWrapper = () => {
  return (
    <Router>
      <Switch>
        {
          routes.map((route) => (
            <Route key={route.url} path={route.url} exact={route.isExact}>
              {route.component}
            </Route>
          ))
        }
      </Switch>
    </Router>
  )
}
