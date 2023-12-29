import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { App } from 'App'
import { store } from 'store/store'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)