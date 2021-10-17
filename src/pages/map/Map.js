import React, { useRef, useEffect, useState } from 'react'
import './style.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import mapboxgl from '!mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax
import bike from '../../assets/img/bike-icon.svg'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

const Map = () => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZmFkaWxtYXAiLCJhIjoiY2t1dWU5OGp3MWtvbzJvcXZybzlpNXFhcSJ9.893BxZCnUJJSSZPa475ibA'

  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(18.07329006284052)
  const [lat, setLat] = useState(59.32048135983436)
  const [zoom, setZoom] = useState(9)

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],

      zoom: zoom,
    })
  })

  console.log(map)

  return (
    <div className='map-wrapper'>
      <div className='map-wrapper-header'>
        <Header />
      </div>
      <div className='map-content'>
        <div ref={mapContainer} className='map-container' />
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
