import React from 'react'
import TicketCard from './TicketCard'
import Ticket from './Ticket'
import PickBike from './PickBike'
import TicketMenu from './TicketMenu'
import { Switch, Route } from 'react-router-dom'
import Header from '../header/Header'

function Content() {
  const myTickets = [
    { timeLeft: '01:14:31', ticketType: 'Enkelbiljett SL', discounted: true },
  ]
  const buyTickets = [
    { title: 'Enkelbiljett', body: 'Obegränsat antal resor inom 75 minuter' },
    { title: '30-dagarsbiljett', body: 'För dig som reser regelbundet' },
    { title: 'Övriga biljetter', body: 'Se hela biljettutbudet' },
  ]

  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <div className='Home'>
            <TicketCard myTickets={myTickets} />
            <TicketMenu buyTickets={buyTickets} />
          </div>
        </Route>
        <Route exact path='/findBike'>
          <Header />
          <PickBike />
        </Route>
        <Route exact path='/ticket'>
          <Header />
          <Ticket />
        </Route>
      </Switch>
    </div>
  )
}

export default Content
