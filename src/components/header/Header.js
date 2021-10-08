import React from 'react'
import arrow from '../../assets/img/Arrow-left.svg'
import './style.css'

const Header = () => {
  return (
    <header className='header-container'>
      <img src={arrow} alt='left arrow' />
      <span className='regular'>Tillbaka</span>
    </header>
  )
}

export default Header
