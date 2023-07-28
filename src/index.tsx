import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { App } from './App'
import { store } from './redux/store'

const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={store._state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById('root'),
  )
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)