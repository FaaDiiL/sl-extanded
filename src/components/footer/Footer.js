import React from 'react'
import journey from '../../assets/img/Journey@2x.svg'
import ticket from '../../assets/img/Ticket@2x.svg'
import more from '../../assets/img/More-1.svg'
import './style.css'
const Footer = () => {
  return (
    <footer>
      <div>
        <img src={journey} alt='Journey' />
        <p>Resa</p>
      </div>
      <div>
        <img src={ticket} alt='Ticket' />
        <p className='active'>Biljetter</p>
      </div>
      <div>
        <img src={more} alt='More...' />
        <p>Mer</p>
      </div>
    </footer>
  )
}

export default Footer
