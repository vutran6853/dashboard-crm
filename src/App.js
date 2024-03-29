import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar.js'
import route from './routes'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './duck/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Navbar />
          {route}
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
