import React, { useState } from 'react'
import YourTickets from '../../components/yourTickets/YourTickets'
import HandleTickets from '../../components/handleTickets/HandleTickets'
import BuyNewTicket from '../../components/buyNewTicket/BuyNewTicket'

const Home = ({ ticketTime, setTicketTime }) => {
  const [isEmpty, setIsEmpty] = useState(true)

  const buyTicket = (type) => {
    switch (type) {
      case 'single':
        setTicketTime({
          hours: 1,
          minutes: 15,
          seconds: 0,
          type: 'single',
          title: 'Enkel biljett',
          priceCategory: 'Rabatterad',
        })
        setIsEmpty(false)
        break
      case 'month':
        setTicketTime({
          expire: '',
          type: 'period',
          title: '30-dagarsbiljett SL',
          priceCategory: 'Rabatterad',
        })
        setIsEmpty(false)
        break

      default:
        return 'Write "single" or "Month" in the buyTicket function.'
    }
  }

  return (
    <>
      <YourTickets
        isEmpty={isEmpty}
        setIsEmpty={setIsEmpty}
        ticketTime={ticketTime}
        setTicketTime={setTicketTime}
      />
      <BuyNewTicket buyTicket={buyTicket} buyTicket={buyTicket} />
      <HandleTickets />
    </>
  )
}

export default Home
