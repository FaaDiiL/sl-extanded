import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Buttons = styled.div`
  background-color: rgba(76, 81, 87, 1);
  padding: 12px 233px 16px 21px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const TicketCard = ({ myTickets }) => {
  return (
    <div>
      <h1>Dina biljetter</h1>
      {myTickets.map((ticket, i) => (
        <div style={{ backgroundColor: 'green' }} key={i}>
          <hr />
          <h2>{ticket.timeLeft}</h2>
          <p>
            <b>{ticket.ticketType}</b>
          </p>
          {ticket.discounted && <p>En rabatterad</p>}

          <Buttons>
            <Link to='/findBike'>
              {' '}
              <button onClick={() => console.log('Cykel knappen klickad.')}>
                Cykel
              </button>
            </Link>
            <Link to='/ticket'>
              <button onClick={() => console.log('Biljett knappen klickad.')}>
                Visa biljett
              </button>
            </Link>
          </Buttons>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default TicketCard
