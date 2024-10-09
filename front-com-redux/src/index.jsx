import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'


import App from './main/App'
import reducers from './main/reducers/reducers'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'))