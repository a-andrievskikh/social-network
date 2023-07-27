import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { App } from './App'
import { store } from './redux/state'

const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>,
    document.getElementById('root'),
  )
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)