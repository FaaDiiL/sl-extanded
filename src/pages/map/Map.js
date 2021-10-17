import React, { useRef, useEffect, useState } from 'react'
import './style.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import bike from '../../assets/img/bike-icon.svg'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import available from '../../assets/img/available.png'
import unAvailable from '../../assets/img/unAvailable.png'
import current from '../../assets/img/current.png'

// app.js
import 'mapbox-gl/dist/mapbox-gl.css'

const Map = () => {
  ReactMapGL.accessToken =
    'pk.eyJ1IjoiZmFkaWxtYXAiLCJhIjoiY2t1dWU5OGp3MWtvbzJvcXZybzlpNXFhcSJ9.893BxZCnUJJSSZPa475ibA'

  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(18.07329006284052)
  const [lat, setLat] = useState(59.32048135983436)
  const [zoom, setZoom] = useState(13)
  const [showPopup, togglePopup] = useState(false)
  const [selectedBike, setSelectedBike] = useState(null)
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 59.3195,
    longitude: 18.0723,
    zoom: 13.5,
    width: '375px',
    height: '550px',
    pitch: 15,
  })
  const availableBikes = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          id: 1,
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

  return (
    <div className='map-wrapper'>
      <div className='map-wrapper-header'>
        <Header />
      </div>
      <div className='map-content'>
        <ReactMapGL
          mapboxApiAccessToken='pk.eyJ1IjoiZmFkaWxtYXAiLCJhIjoiY2t1dWU5OGp3MWtvbzJvcXZybzlpNXFhcSJ9.893BxZCnUJJSSZPa475ibA'
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
          {availableBikes.features.map((bike, i) => (
            <Marker
              key={bike.properties.id}
              latitude={bike.geometry.coordinates[1]}
              longitude={bike.geometry.coordinates[0]}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <img src={available} alt='de' />
            </Marker>
          ))}

          {unAvailableBikes &&
            unAvailableBikes.features.map((bike, i) => (
              <div
                onClick={(e) => {
                  e.preventDefault()
                  setSelectedBike(bike)
                }}
              >
                <Marker
                  key={bike.properties.id}
                  latitude={bike.geometry.coordinates[1]}
                  longitude={bike.geometry.coordinates[0]}
                  offsetLeft={-20}
                  offsetTop={-10}
                >
                  <img src={unAvailable} alt='de' />
                </Marker>
              </div>
            ))}

          {selectedBike ? (
            <Popup
              latitude={selectedBike.geometry.coordinates[1]}
              longitude={selectedBike.geometry.coordinates[0]}
              offsetLeft={0}
              offsetTop={-15}
            >
              <div style={{ width: '90px' }}>
                Bike is un available. Try to choose the black image.
              </div>
            </Popup>
          ) : (
            ''
          )}
        </ReactMapGL>
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
            Ditt fordon är nu reserverat och finns på adressen: Södermalmstorg
            <span className='info-text-bottom'>
              <span className='left'>116 46 Stockholm</span>
              <span className='right'>ID: 123abc</span>
            </span>
          </p>
        </div>
        <button>Boka ditt färdmedel</button>
      </div>
      <Footer />
    </div>
  )
}

export default Map
