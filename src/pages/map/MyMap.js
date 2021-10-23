import React, { useState, useRef } from 'react'

import GoogleMapReact from 'google-map-react'
import available from '../../assets/img/Available.svg'
import unAvailable from '../../assets/img/Unavailable.svg'
import current from '../../assets/img/Current.svg'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
const Available = ({
  text,
  id,
  selected,
  bike,
  setSelected,
  infoBox,
  toggle,
  setToggle,
  setId,
  setAddress,
}) => (
  <div
    className='marker-wrapper'
    onClick={() => {
      setToggle(!toggle)
    }}
  >
    <div>
      <img
        src={
          toggle & ((selected !== null) & (selected === id))
            ? current
            : available
        }
        alt='This bike is available!'
        onClick={() => {
          setSelected(bike.properties.id)
          setId(bike.properties.id)
          setAddress(bike.properties.address)
        }}
      />
      {selected === id && (
        <p ref={infoBox} className={toggle ? `popup` : `hide`}>
          {text}
        </p>
      )}
      {/* <img src={current} alt='This is the current bike!' /> */}
    </div>
  </div>
)

//Booked Bike "Marker Component"
const Modal = ({ modal }) => (
  <div
    className='modal-container'
    ref={modal}
    onClick={() => modal.current.remove()}
  >
    <div className='modal-center'>
      <div className='modal-item-container'>
        <img src={available} alt='This bike is available!' />
        <p>Tillgänglig</p>
      </div>
      <div className='modal-item-container'>
        <img src={unAvailable} alt='This bike is available!' />

        <p>Upptagen</p>
      </div>
      <div className='modal-item-container'>
        <img src={current} alt='This bike is available!' />
        <p>Vald</p>
      </div>
    </div>
  </div>
)

// Taken bikes "Marker Component"
const UnAvailable = ({ text, selected, setSelected }) => (
  <div>
    <img src={unAvailable} />
    {text}
  </div>
)
// Not taken bikes "Marker Component"

const MyMap = ({ setId, setAddress, availableBikes, unAvailableBikes }) => {
  // Map configs
  const modal = useRef(null)
  const infoBox = useRef(null)
  const [center, setCenter] = useState({ lat: 59.325, lng: 18.0723 })
  const [zoom, setZoom] = useState(14.5)
  const [selected, setSelected] = useState(null)
  const [toggle, setToggle] = useState(false)

  // Marker customization - Start

  const AvailableIcon = L.icon({
    iconUrl: available,
    iconRetinaUrl: available,
    iconAnchorUrl: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 33],
    className: 'leaflet-venue-icon',
  })

  const UnAvailableIcon = L.icon({
    iconUrl: unAvailable,
    iconRetinaUrl: unAvailable,
    iconAnchorUrl: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 33],
    className: 'leaflet-venue-icon',
  })

  const CurrentIcon = L.icon({
    iconUrl: current,
    iconRetinaUrl: current,
    iconAnchorUrl: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 33],
    className: 'leaflet-venue-icon',
  })

  // Marker customization - End

  return (
    <div style={{ height: '550px', width: '375px' }}>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://sl-ext-app.surge.sh">Sl Map!</a>'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[51.505, -0.09]} icon={CurrentIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      {/* <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyDu42441pY2D0uncLW5E799A5nBa1gV16A',
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {availableBikes.features.map((bike, i) => (
          <Available
            key={i}
            lat={bike.geometry.coordinates[1]}
            lng={bike.geometry.coordinates[0]}
            text={bike.properties.address}
            id={bike.properties.id}
            setSelected={setSelected}
            bike={bike}
            selected={selected}
            infoBox={infoBox}
            toggle={toggle}
            setToggle={setToggle}
            setId={setId}
            setAddress={setAddress}
          />
        ))}
        {unAvailableBikes.features.map((bike, i) => (
          <UnAvailable
            key={i + 10}
            lat={bike.geometry.coordinates[1]}
            lng={bike.geometry.coordinates[0]}
            text={bike.properties.address}
            id={bike.properties.id}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
        <Modal modal={modal} />
      </GoogleMapReact> */}
    </div>
  )
}

export default MyMap
