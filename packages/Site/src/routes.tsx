import { Route } from 'inferno-router'

import { load } from './utils/route'
import { URLs } from './pages'
import NotFound from './pages/404'
import { App } from './components/app'

/** Load fronts and global styles */
import './globals'

export const routes = (
  <Route component={App}>

    {URLs.slice().map(item =>
      <Route path={item.url} getComponent={load(item.title)} />
    )}

    <Route path='*' component={NotFound} />

  </Route>
)