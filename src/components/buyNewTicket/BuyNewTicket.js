import React from 'react'
import './style.css'
const BuyNewTicket = ({ buyTicket }) => {
  return (
    <section id='kop-biljetter'>
      <div className='sub-header-container sub-header'>
        <h2 className='top '>Köp ny biljett</h2>
      </div>
      <div className='biljett-typ' onClick={(e) => buyTicket('single')}>
        <h3>Enkelbiljett</h3>
        <p>Obegränsat antal resor inom 75 minuter</p>
      </div>
      <div className='biljett-typ' onClick={(e) => buyTicket('month')}>
        <h3>30-dagarsbiljett</h3>
        <p>För dig som reser regelbundet</p>
      </div>
      <div className='biljett-typ'>
        <h3>Övriga biljetter</h3>
        <p>Se hela biljettutbudet</p>
      </div>
    </section>
  )
}

export default BuyNewTicket
