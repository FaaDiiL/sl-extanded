import React from 'react'
import mapImg from '../../assets/img/map.png'

const PickBike = () => {
  return (
    <div>
      <h1>Choose Bike!</h1>
      <div>
        <img src={mapImg} alt='A map' />
      </div>
      <section
        id='bikeInfoBox'
        style={{
          backgroundColor: 'grey',
          color: 'white',
          width: '380px',
          margin: '0 auto',
        }}
      >
        <div>
          <p>BikeIcon cykel</p>
          <p>Info: Välj en cykel på kartan som du vill reservera.</p>
        </div>
        <div></div>
      </section>
    </div>
  )
}

export default PickBike
