import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://thumbnail.imgbin.com/19/19/19/imgbin-computer-icons-foursquare-graphics-psd-logo-health-center-FztfrBmPbLarS7qXyJyt7GX8z_t.jpg"
          alt="" />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://www.edarabia.com/wp-content/uploads/2019/12/robotics-perception-292756.jpg"
               alt="" />
        </div>
        <div>
          <img src="https://p16.tiktokcdn.com/tos-maliva-avt-0068/6423ad2a7b4eb473f04aa5da968ccc0c~c5_100x100.jpeg"
               alt="" />
        </div>
        <div>
          My Posts
          <div>New Post</div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
    </div>
  )
}

export default App