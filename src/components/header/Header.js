import React from 'react'
import arrow from '../../assets/img/Arrow-left.svg'
import './style.css'
import { useHistory } from 'react-router-dom'
const Header = () => {
  const history = useHistory()

  return (
    <header className='header-container' onClick={() => history.goBack()}>
      <img src={arrow} alt='left arrow' />
      <span className='regular'>Tillbaka</span>
    </header>
  )
}

export default Header
