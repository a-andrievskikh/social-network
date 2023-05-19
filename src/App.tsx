import React from 'react'
import './App.css'


export function App() {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  )
}

function Header() {
  return (
    <div>
      <ul>
        <a href="#">Home</a>
        <a href="#">News Fees</a>
        <a href="#">Messages</a>
      </ul>
    </div>
  )
}

function Technologies() {
  return (
    <ul>
      <li>CSS</li>
      <li>HTML</li>
      <li>JS</li>
      <li>React</li>
    </ul>
  )
}

