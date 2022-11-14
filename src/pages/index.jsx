import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './login'
import Home from './home'
import GlobalStyle from './styles'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path='/home' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
