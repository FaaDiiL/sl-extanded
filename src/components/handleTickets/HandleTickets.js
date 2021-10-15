import React from 'react'
import add from '../../assets/img/Add@2x.svg'
import './style.css'

const HandleTickets = () => {
  return (
    <section id='hantera-biljetter'>
      <div className='sub-header-container sub-header'>
        <h2 className='top '>Hantera Biljetter</h2>
      </div>

      <div className='biljett-typ hantera-biljett-subheader'>
        <h3>Köphistorik och kvitton</h3>
      </div>

      <div className='flex-row biljett-typ hantera-biljett-subheader space-between'>
        <h3>Lägg till nytt betalkort</h3>
        <img src={add} alt='plus' />
      </div>
      <div className='flex-row biljett-typ hantera-biljett-subheader space-between'>
        <h3>Förlustgaranti</h3>
        <span className='logga-in'>Logga in för att aktivera</span>
      </div>
      <div className='biljett-typ hantera-biljett-subheader'>
        <h3>Återskapa appbiljetter</h3>
      </div>
    </section>
  )
}

export default HandleTickets
