import React from 'react'
import styled from 'styled-components'


export default function Navigation() {
  return (
    <>
    <Item>Navigation</Item>
    <Item>Navigation</Item>
    <Item>Navigation</Item>
    <Item>Navigation</Item>
    </>
  )
}

const Item = styled.div`
font-weight: 500;
font-size: 18px;
line-height: 21px;
letter-spacing: 0.016em;
margin: 20px 0;
`