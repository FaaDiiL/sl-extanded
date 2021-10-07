import React from 'react'
import qr from './assets/img/Qr@2x.svg'
import resa from './assets/img/Journey@2x.svg'
import biljetter from './assets/img/Ticket@2x.svg'
import mer from './assets/img/More-1.svg'
import add from './assets/img/Add@2x.svg'
import './App.css'

import { BrowserRouter as Router, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
        <div className='wrapper'>
          <header>
            <img
              style={{ display: 'none' }}
              src='./img/Arrow-left.svg'
              alt='left arrow'
            />
          </header>
          <section id='dina-biljetter'>
            <div className='blue-line' />
            <h2>Dina biljetter</h2>
            <div className='ticket-holder'>
              <p style={{ display: 'none' }}>Du har inga biljetter</p>
              <div style={{}} className='bought-ticket-area'>
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
          <section id='kop-biljetter'>
            <div className='blue-line' />
            <h2 className='biljett-typ-header'>Köp ny biljett</h2>
            <div className='biljett-typ'>
              <h3>Enkelbiljett</h3>
              <p>Obegränsat antal resor inom 75 minuter</p>
            </div>
            <div className='biljett-typ'>
              <h3>30-dagarsbiljett</h3>
              <p>För dig som reser regelbundet</p>
            </div>
            <div className='biljett-typ'>
              <h3>Övriga biljetter</h3>
              <p>Se hela biljettutbudet</p>
            </div>
          </section>
          <section id='hantera-biljetter'>
            <div className='blue-line' />
            <h2 className='biljett-typ-header'>Hantera Biljetter</h2>
            <div className='biljett-typ hantera-biljett-subheader'>
              <h3>Köphistorik och kvitton</h3>
            </div>
            <div className='space-between biljett-typ hantera-biljett-subheader'>
              <h3>Lägg till nytt betalkort</h3>
              <img src={add} alt='plus' />
            </div>
            <div className='space-between biljett-typ hantera-biljett-subheader'>
              <h3>Förlustgaranti</h3>
              <span className='logga-in'>Logga in för att aktivera</span>
            </div>
            <div className='biljett-typ hantera-biljett-subheader'>
              <h3>Återskapa appbiljetter</h3>
            </div>
          </section>
          <footer>
            <div>
              <img src={resa} alt='Journey' />
              <p>Resa</p>
            </div>
            <div>
              <img src={biljetter} alt='Ticket' />
              <p className='active'>Biljetter</p>
            </div>
            <div>
              <img src={mer} alt='More...' />
              <p>Mer</p>
            </div>
          </footer>
        </div>
      </Switch>
    </Router>
  )
}

export default App
