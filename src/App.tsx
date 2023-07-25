import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { Profile } from './components/Profile/Profile'
import { Dialogs } from './components/Dialogs/Dialogs'
import { News } from './components/News/News'
import { Music } from './components/Music/Music'
import { Settings } from './components/Settings/Settings'

export type DialogsType = {
  id: number
  name: string
}

export type MessageType = {
  id: number
  message: string
}

export type PostType = {
  id: number
  message: string
  likesCount: number
}

export const App = () => {

  const dialogs: DialogsType[] = [
    {id: 1, name: 'Dymich'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
  ]

  const messages: MessageType[] = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
  ]

  const posts: PostType[] = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'It\'s my first project.', likesCount: 20},
  ]

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" render={() => <Profile posts={posts} />} />
          <Route path="/dialogs" render={() => <Dialogs dialogs={dialogs} messages={messages} />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  )
}