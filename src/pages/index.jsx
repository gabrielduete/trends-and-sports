import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './login'
import Home from './home'
import TrendsContent from './trendsContent'
import SportsContent from './sportsContent'
import GlobalStyle from './styles'

function App() {
  const [userName, setUserName] = useState()

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route
          exact
          path='/'
          element={<LoginPage setUserName={setUserName} />}
        />
        <Route exact path='/home' element={<Home name={userName} />} />
        <Route exact path='/trends' element={<TrendsContent />} />
        <Route exact path='/esportes' element={<SportsContent />} />
      </Routes>
    </Router>
  )
}

export default App
