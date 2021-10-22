import React, { useState } from 'react'
import YourTickets from '../../components/yourTickets/YourTickets'
import HandleTickets from '../../components/handleTickets/HandleTickets'
import BuyNewTicket from '../../components/buyNewTicket/BuyNewTicket'
import QrGenerator from '../../components/qrGenerator/QrGenerator'

const Home = ({ ticketTime, setTicketTime }) => {
  const [isEmpty, setIsEmpty] = useState(ticketTime.length > 0 ? true : false)
  const [isClicked, setIsClicked] = useState(false)

  const buyTicket = (type) => {
    switch (type) {
      case 'single':
        setTicketTime({
          hours: 1,
          minutes: 15,
          seconds: 0,
          type: 'single',
          title: 'Enkel biljett SL',
          priceCategory: '1 rabatterad',
        })
        setIsEmpty(false)
        break
      case 'month':
        setTicketTime({
          expire: '',
          type: 'period',
          title: '30-dagarsbiljett SL',
          priceCategory: 'rabatterad',
        })
        setIsEmpty(false)
        break

      default:
        return 'Write "single" or "Month" in the buyTicket function.'
    }
  }

  return (
    <>
      <div
        style={{ display: isClicked ? '' : 'none' }}
        onClick={() => setIsClicked(false)}
      >
        <QrGenerator isClicked={isClicked} ticketTime={ticketTime} />
      </div>
      <YourTickets
        isEmpty={isEmpty}
        setIsEmpty={setIsEmpty}
        ticketTime={ticketTime}
        setTicketTime={setTicketTime}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
      <BuyNewTicket buyTicket={buyTicket} />
      <HandleTickets />
    </>
  )
}

export default Home
