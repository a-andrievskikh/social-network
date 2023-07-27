import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { App } from './App'
import { addPost, subscribe, updateNewPostText } from './redux/state'
import { state } from './redux/state'

const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}
           addPost={addPost}
           updateNewPostText={updateNewPostText}
      />
    </BrowserRouter>,
    document.getElementById('root'),
  )
}
rerenderEntireTree()
subscribe(rerenderEntireTree)