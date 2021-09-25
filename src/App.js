import React from 'react'

import './App.css'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className='App'>
        <Content />
        <Footer />
      </div>
    </Router>
  )
}

export default App
