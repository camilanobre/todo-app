import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter } from 'react-router-dom';

import Todo from '../todo/Todo'
import About from '../about/About'

const Routes = props => (
    <HashRouter>
        <Redirect from='*' to='/Todo' />
        <Route path='/Todo' component={Todo} />
        <Route path='/about' component={About} />
    </HashRouter>
)

export default Routes