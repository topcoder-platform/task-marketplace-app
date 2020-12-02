import React from 'react'

import './index.css'
import App from './App'
import { store } from './store'
import { Provider } from 'react-redux'

export default function Root () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
