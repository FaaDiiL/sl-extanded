import React from 'react'
import './style.css'
import Ticket from '../ticket/Ticket'
const YourTickets = ({
  ticketTime,
  setTicketTime,
  isEmpty,
  setIsEmpty,
  setIsClicked,
}) => {
  return (
    <section id='dina-biljetter'>
      <div id='margin-reset' className='blue-line' />
      <h2>Dina biljetter</h2>
      <div className='card center'>
        <p
          className='no-tickets-text'
          style={{ display: `${isEmpty ? '' : 'none'}` }}
        >
          Inga biljetter!
        </p>
        {/* 
            // todo Add the Bought tickets.....
        */}
        {!isEmpty && (
          <Ticket
            setIsEmpty={setIsEmpty}
            ticketTime={ticketTime}
            setTicketTime={setTicketTime}
            setIsClicked={setIsClicked}
          />
        )}
      </div>
    </section>
  )
}

export default YourTickets
