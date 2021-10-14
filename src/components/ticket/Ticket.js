import React, { useState, useEffect } from 'react'
import qr from '../../assets/img/Qr@2x.svg'
import './style.css'
const Ticket = ({ setIsEmpty }) => {
  const [ticketTime, setTicketTime] = useState({
    hours: 1,
    minutes: 15,
    seconds: 0,
  })
  const buyTicket = (type) => {
    switch (type) {
      case 'single':
        setTicketTime({ hours: 1, minutes: 15, seconds: 0 })
        setIsEmpty(false)
        break
      case 'month':
        setTicketTime({ hours: 1, minutes: 15, seconds: 0 })
        setIsEmpty(false)
        break

      default:
        console.log('Write "single" or "Month" in the buyTicket function.')
        break
    }
  }

  const { hours, minutes, seconds } = ticketTime

  useEffect(() => {
    const interval = setInterval(() => {
      if ((hours === 0) & (minutes > 0) & (seconds === 0)) {
        setTicketTime({
          ...ticketTime,
          minutes: minutes - 1,
          seconds: seconds + 59,
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
        setIsEmpty(true)
        clearInterval(interval)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [ticketTime])

  return (
    <div className='bought-ticket-area'>
      <div className='ticket-info'>
        <h2>
          {hours < 9 ? `0${hours}` : `${hours}`}:
          {minutes < 9 ? `0${minutes}` : `${minutes}`}:
          {seconds <= 9 ? `0${seconds}` : `${seconds}`}
        </h2>
        <h3>Enkelbiljett SL</h3>
        <p>1 rabatterad</p>
      </div>
      <div className='ticket-links'>
        <button className='bike-link' href='!#'>
          Reservera cykel
        </button>
        <button className='ticket-links-show_btn' href='!#'>
          Visa biljett <img src={qr} alt='Qr-symbol' />
        </button>
      </div>
    </div>
  )
}

export default Ticket
