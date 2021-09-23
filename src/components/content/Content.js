import React from 'react'
import TicketCard from './TicketCard'
import PickBike from './PickBike'
import TicketMenu from './TicketMenu'

function Content({ number }) {
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
      <TicketCard myTickets={myTickets} />
      <TicketMenu buyTickets={buyTickets} />
    </div>
  )
}

export default Content
