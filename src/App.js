import React, { useState } from 'react'
import qr from './assets/img/Qr@2x.svg'
import resa from './assets/img/Journey@2x.svg'
import biljetter from './assets/img/Ticket@2x.svg'
import mer from './assets/img/More-1.svg'
import add from './assets/img/Add@2x.svg'
import './App.css'
import Header from './components/header/Header'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Map from './pages/map/Map'
function App() {
  const [ticketTime, setTicketTime] = useState({})
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className='wrapper flex-column space-between'>
            <Home ticketTime={ticketTime} setTicketTime={setTicketTime} />
            <Footer />
          </div>
        </Route>

        <Route path='/about'>
          <div className='wrapper'>
            <Header />
            <Footer />
          </div>
        </Route>
        <Route path='/map'>
          <Map />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
