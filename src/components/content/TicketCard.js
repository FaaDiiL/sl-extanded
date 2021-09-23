import React from 'react'

const TicketCard = ({ myTickets }) => {
  return (
    <div>
      <h1>Dina biljetter</h1>
      {myTickets.map((ticket, i) => (
        <div key={i}>
          <hr />
          <h2>{ticket.timeLeft}</h2>
          <p>
            <b>{ticket.ticketType}</b>
          </p>
          {ticket.discounted && <p>En rabatterad</p>}

          <div>
            <button onClick={() => alert('Du ska få se din biljett Yaoo!')}>
              Reservera cykel
            </button>
            <button onClick={() => alert('Du ska få se din biljett Yaoo!')}>
              Visa biljett
            </button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default TicketCard
