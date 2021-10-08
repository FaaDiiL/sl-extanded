import React from 'react'
import qr from '../../assets/img/Qr@2x.svg'
import './style.css'

const YourTickets = () => {
  return (
    <section id='dina-biljetter'>
      <div className='blue-line' />
      <h2>Dina biljetter</h2>
      <div className='ticket-holder'>
        <p style={{ display: 'none' }}>Du har inga biljetter</p>
        <div className='bought-ticket-area'>
          <div className='ticket-info'>
            <h2>01:14:31</h2>
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
      </div>
    </section>
  )
}

export default YourTickets
