import React, { useRef, useEffect, useState } from 'react'
import './style.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import bike from '../../assets/img/bike-icon.svg'
import available from '../../assets/img/available.png'
import unAvailable from '../../assets/img/unAvailable.png'
import current from '../../assets/img/current.png'
import { useRouteMatch, Route, useHistory } from 'react-router-dom'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'
import MyMap from './MyMap'

const Map = ({ ticketTime }) => {
  const { hours, minutes, seconds } = ticketTime
  let history = useHistory()
  let { path, url } = useRouteMatch()

  const [id, setId] = useState(null)
  const [address, setAddress] = useState(null)
  // objects of locations...
  const availableBikes = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          id: 1,
          address: 'Sankt Paulsgatan 4A, 118 46 Stockholm',
        },
        geometry: {
          type: 'Point',
          coordinates: [18.06939840316772, 59.31846605570583],
        },
      },
      {
        type: 'Feature',
        properties: {
          id: 2,
          address: 'Hornsgatan, Stockholm',
        },
        geometry: {
          type: 'Point',
          coordinates: [18.06886598467827, 59.3201412291038],
        },
      },
      {
        type: 'Feature',
        properties: {
          id: 3,
          address: 'Södermalmstorg, 116 46 Stockholm',
        },
        geometry: {
          type: 'Point',
          coordinates: [18.072118163108826, 59.31955068515802],
        },
      },
      {
        type: 'Feature',
        properties: {
          id: 4,
          address: 'Katarinavägen 2 A, 116 45 Stockholm',
        },
        geometry: {
          type: 'Point',
          coordinates: [18.072574138641357, 59.31934128936006],
        },
      },
      {
        type: 'Feature',
        properties: {
          id: 5,
          address: 'Skeppsbron 64, 111 30 Stockholm',
        },
        geometry: {
          type: 'Point',
          coordinates: [18.073893785476685, 59.3218655860804],
        },
      },
    ],
  }
  const unAvailableBikes = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          'marker-color': '#7e7e7e',
          'marker-size': 'medium',
          'marker-symbol': '',
          id: 4,
        },
        geometry: {
          type: 'Point',
          coordinates: [18.07084947824478, 59.319981105803166],
        },
      },
      {
        type: 'Feature',
        properties: {
          'marker-color': '#7e7e7e',
          'marker-size': 'medium',
          'marker-symbol': '',
          id: 3,
        },
        geometry: {
          type: 'Point',
          coordinates: [18.06912213563919, 59.320447787848465],
        },
      },
      {
        type: 'Feature',
        properties: {
          'marker-color': '#7e7e7e',
          'marker-size': 'medium',
          'marker-symbol': '',
          id: 7,
        },
        geometry: {
          type: 'Point',
          coordinates: [18.06922674179077, 59.31833466606576],
        },
      },
      {
        type: 'Feature',
        properties: {
          'marker-color': '#7e7e7e',
          'marker-size': 'medium',
          'marker-symbol': '',
          id: 9,
        },
        geometry: {
          type: 'Point',
          coordinates: [18.07504177093506, 59.31767771024806],
        },
      },
      {
        type: 'Feature',
        properties: {
          'marker-color': '#7e7e7e',
          'marker-size': 'medium',
          'marker-symbol': '',
          id: 2,
        },
        geometry: {
          type: 'Point',
          coordinates: [18.07328224182129, 59.32143313651711],
        },
      },
      {
        type: 'Feature',
        properties: {
          'marker-color': '#7e7e7e',
          'marker-size': 'medium',
          'marker-symbol': '',
          id: 1,
        },
        geometry: {
          type: 'Point',
          coordinates: [18.072166442871094, 59.322998687321856],
        },
      },
      {
        type: 'Feature',
        properties: {
          'marker-color': '#7e7e7e',
          'marker-size': 'medium',
          'marker-symbol': '',
          id: 5,
        },
        geometry: {
          type: 'Point',
          coordinates: [18.065407276153564, 59.319177740764495],
        },
      },
      {
        type: 'Feature',
        properties: {
          'marker-color': '#7e7e7e',
          'marker-size': 'medium',
          'marker-symbol': '',
          id: 8,
        },
        geometry: {
          type: 'Point',
          coordinates: [18.067166805267334, 59.31779815309839],
        },
      },
      {
        type: 'Feature',
        properties: {
          'marker-color': '#7e7e7e',
          'marker-size': 'medium',
          'marker-symbol': '',
          id: 6,
        },
        geometry: {
          type: 'Point',
          coordinates: [18.061823844909668, 59.318389411810834],
        },
      },
    ],
  }
  useEffect(() => {
    address !== null && console.log(address.split(',')[0])
  }, [address])
  return (
    <div className='map-wrapper'>
      <div className='map-wrapper-header'>
        <Header />
      </div>
      <Route exact path={`${path}`}>
        <div className='map-content'>
          <MyMap
            availableBikes={availableBikes}
            unAvailableBikes={unAvailableBikes}
            id={id}
            setId={setId}
            setAddress={setAddress}
          />
          <div className='box'></div>
        </div>
        <div className='info-container'>
          <div className='info-container-header'>
            <span className='bike-img'>
              <img src={bike} alt='bike' />
            </span>
            <span className='info-title'> Cykel</span>
          </div>

          <div className='info-container-body'>
            <p className='info-text-top'>
              {id !== null
                ? 'Ditt fordon är nu reserverat och finns på adressen: '
                : 'Välj en svart markerad cykel!'}
              {address !== null && address.split(',')[0]}
              <span className='info-text-bottom'>
                <span className='left'>
                  {address !== null && address.split(',')[1]}
                </span>
                {id !== null && <span className='right'> ID: {id}</span>}
              </span>
            </p>
          </div>
          <button
            className={id !== null ? 'button-active' : 'hide'}
            onClick={() => history.push(`${url}/${id}`)}
          >
            Boka ditt färdmedel
          </button>
        </div>
      </Route>

      <Route exact path={`${path}/:id`}>
        <div className='map-content-ticket'>
          <div className='ticket-wrapper'>
            <h2>
              {hours}:{minutes}:{seconds}
            </h2>
          </div>
        </div>
        <div className='info-container'>
          <div className='info-container-header'>
            <span className='bike-img'>
              <img src={bike} alt='bike' />
            </span>
            <span className='info-title'> Cykel</span>
          </div>

          <div className='info-container-body'>
            <p className='info-text-top'>
              {id !== null ? `Bike-ID: ${id}` : 'Välj en svart markerad cykel!'}
              {address !== null && address.split(',')[0]}
              <span className='info-text-bottom'>
                <span className='left'>
                  {address !== null && address.split(',')[1]}
                </span>
                {id !== null && <span className='right'> ID: {id}</span>}
              </span>
            </p>
          </div>
          <button
            className={id !== null ? 'button-active danger' : 'hide'}
            onClick={() => history.push(`/`)}
          >
            Avsluta cykelturen
          </button>
        </div>
      </Route>

      <Footer />
    </div>
  )
}

export default Map
