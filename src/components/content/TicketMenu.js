import React from 'react'

const TicketMenu = ({ buyTickets }) => {
  return (
    <div>
      <h1>Köp ny Biljett</h1>
      {buyTickets.map((ticket) => (
        <div key={ticket.title}>
          <h1>{ticket.title}</h1>
          <p>{ticket.body}</p>
        </div>
      ))}
    </div>
  )
}

export default TicketMenu
