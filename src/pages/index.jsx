import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './login'
import Home from './home'
import TrendsContent from './trendsContent'
import EsportsContent from './esportsContent'
import GlobalStyle from './styles'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/trends' element={<TrendsContent />} />
        <Route exact path='/esportes' element={<EsportsContent />} />
      </Routes>
    </Router>
  )
}

export default App
