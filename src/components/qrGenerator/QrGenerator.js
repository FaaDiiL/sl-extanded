import React, { useState, useEffect } from 'react'
import QRCode from 'qrcode'
import './style.css'
const QrGenerator = ({ isClicked }) => {
  const [qrCode, setQrCode] = useState({})
  useEffect(() => {
    QRCode.toDataURL('some text', { version: 2 }, function (err, url) {
      setQrCode(url)
    })
  }, [])

  return (
    <div className='qr-wrapper' style={{ display: isClicked ? '' : 'none' }}>
      <div id='modal'>
        <h3 className='close'>X</h3>
        <div>
          <h2>01:15:00</h2>
        </div>
        <div className='modal-img-container'>
          <img className='img' src={qrCode} alt='QR-Code!' />
        </div>
        <div className='model-content'>
          <p>Biljett-ID 12345602 4156</p>
          <p className='slBold'>Enkelbiljett SL</p>
          <p>1 rabatterad</p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default QrGenerator
