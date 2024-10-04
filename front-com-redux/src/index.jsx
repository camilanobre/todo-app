import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'


import App from './main/App'
import reducers from './main/reducers/reducers'
import { createStore } from 'redux'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'))