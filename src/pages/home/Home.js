import React from 'react'
import YourTickets from '../../components/yourTickets/YourTickets'
import HandleTickets from '../../components/handleTickets/HandleTickets'
import BuyNewTicket from '../../components/buyNewTicket/BuyNewTicket'

const Home = () => {
  return (
    <>
      <YourTickets />
      <BuyNewTicket />
      <HandleTickets />
    </>
  )
}

export default Home
