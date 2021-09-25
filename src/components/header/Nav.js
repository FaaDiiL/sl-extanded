import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../../assets/img/arrow.svg'
import styled from 'styled-components'

export const Component2 = styled.div`
  background-color: rgba(76, 81, 87, 1);
  padding: 12px 233px 16px 21px;
  display: flex;
  align-items: flex-start;
`
export const Arrow10 = styled.img`
  width: 20px;
  margin-right: 15px;
`
export const Tillbaka = styled.p`
  /* width: 100%; */
  color: rgba(255, 255, 255, 1);
  align-self: stretch;
  letter-spacing: -0.32px;
  font-family: Gothic A1;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`

const Nav = () => {
  return (
    <Link to='/'>
      <Component2>
        <Arrow10 alt='Arrow' src={arrow} />
        <Tillbaka>Tillbaka</Tillbaka>
      </Component2>
    </Link>
  )
}

export default Nav
