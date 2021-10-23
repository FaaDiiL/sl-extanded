import React, { useState, useEffect } from 'react'
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
  const { hours, minutes, seconds } = ticketTime
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')

  const [isEmpty, setIsEmpty] = useState(ticketTime.length > 0 ? false : true)
  useEffect(() => {
    if (ticketTime.type === 'single') {
      const interval = setInterval(() => {
        if ((hours === 0) & (minutes > 0) & (seconds === 0)) {
          setTicketTime({
            ...ticketTime,
            minutes: minutes - 1,
            seconds: seconds + 59,
            ticket: hours,
          })
        } else if ((hours > 0) & (minutes === 0) & (seconds === 0)) {
          setTicketTime({
            hours: hours - 1,
            minutes: minutes + 59,
            seconds: seconds + 59,
          })
        } else if ((minutes > 0) & (seconds === 0)) {
          setTicketTime({
            ...ticketTime,
            minutes: minutes - 1,
            seconds: seconds + 59,
          })
        } else if (seconds > 0) {
          setTicketTime({ ...ticketTime, seconds: seconds - 1 })
        } else if ((seconds === 0) & (minutes === 0) & (hours === 0)) {
          clearInterval(interval)
        }
      }, 1000)

      return () => clearInterval(interval)
    }
    if (ticketTime.type === 'period') {
      setMonth(getNextMonth())
      setDay(getNextDay())
    }
  }, [ticketTime])

  // Ger dig nästkommande dag i form av en sträng t.ex "15"
  const getNextDay = () => {
    const day = new Date()
    day.setDate(day.getDate() + 30)
    let dayNextMonth = day.toISOString().slice(8, 10)
    console.log(dayNextMonth)
    return dayNextMonth
  }

  // Ger dig nästkommande månad i form av en sträng t.ex "maj"
  const getNextMonth = () => {
    const month = new Date()
    month.setMonth(month.getMonth() + 1)
    const options = { month: 'long' }
    let nextMonth = new Intl.DateTimeFormat('sv-SE', options).format(month)
    console.log(nextMonth)
    return nextMonth
  }

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className='wrapper flex-column space-between'>
            <Home
              setIsEmpty={setIsEmpty}
              isEmpty={isEmpty}
              ticketTime={ticketTime}
              setTicketTime={setTicketTime}
            />
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
          <Map ticketTime={ticketTime} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
