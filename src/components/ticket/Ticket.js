import React, { useState, useEffect } from 'react'
import qr from '../../assets/img/Qr@2x.svg'
import './style.css'
import QrGenerator from '../qrGenerator/QrGenerator'
const Ticket = ({ setIsEmpty, ticketTime, setTicketTime, setIsClicked }) => {
  const { hours, minutes, seconds } = ticketTime
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  useEffect(() => {
    if (ticketTime.type === 'single') {
      const interval = setInterval(() => {
        if ((hours === 0) & (minutes > 0) & (seconds === 0)) {
          setTicketTime({
            ...ticketTime,
            minutes: minutes - 1,
            seconds: seconds + 59,
            ticket: hours,
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
    }
    if (ticketTime.type === 'period') {
      setMonth(getNextMonth())
      setDay(getNextDay())
    }
  }, [ticketTime])

  // Ger dig nästkommande dag i form av en sträng t.ex "15"
  const getNextDay = () => {
    const day = new Date()
    day.setDate(day.getDate() + 30)
    let dayNextMonth = day.toISOString().slice(8, 10)
    console.log(dayNextMonth)
    return dayNextMonth
  }

  // Ger dig nästkommande månad i form av en sträng t.ex "maj"
  const getNextMonth = () => {
    const month = new Date()
    month.setMonth(month.getMonth() + 1)
    const options = { month: 'long' }
    let nextMonth = new Intl.DateTimeFormat('sv-SE', options).format(month)
    console.log(nextMonth)
    return nextMonth
  }

  return (
    <div className='bought-ticket-area'>
      <QrGenerator />
      {/* Enkel Biljett */}
      {ticketTime.type === 'single' && (
        <div className='ticket-info'>
          <h2>
            {hours < 9 ? `0${hours}` : `${hours}`}:
            {minutes < 9 ? `0${minutes}` : `${minutes}`}:
            {seconds <= 9 ? `0${seconds}` : `${seconds}`}
          </h2>
          <h3>{ticketTime.title}</h3>
          {
            (ticketTime.priceCategory = 'Rabatterad' ? (
              <p>1 rabatterad</p>
            ) : (
              <p>1 vuxen</p>
            ))
          }
        </div>
      )}

      {/* Periods Biljett */}
      {ticketTime.type === 'period' && (
        <div className='ticket-info'>
          <p>Gäller till</p>
          <h2>
            {day} {month}
          </h2>
          <h3>{ticketTime.title}</h3>
          {ticketTime.priceCategory === 'Rabatterad' ? (
            <p>1 rabatterad</p>
          ) : (
            <p>1 vuxen</p>
          )}
        </div>
      )}

      <div className='ticket-links'>
        <button className='bike-link' href='!#'>
          Reservera cykel
        </button>
        <button
          className='ticket-links-show_btn'
          onClick={() => setIsClicked((isClicked) => !isClicked)}
        >
          Visa biljett <img src={qr} alt='Qr-symbol' />
        </button>
      </div>
    </div>
  )
}

export default Ticket
