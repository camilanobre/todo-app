import React from 'react'
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
 
import Todo from "../pages/todo/todo"
import About from "../pages/about/about"
 
// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
    <HashRouter>
      <Switch>
        <Route path="/todos" component={Todo} />
        <Route path="/about" component={About} />
        <Redirect from="*" to="/todos" />
      </Switch>
    </HashRouter>
)