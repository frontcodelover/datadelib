import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
    background-color: #E5E5E5;
    height: 100vh;
`

export default function Layout({children}) {
  return (
      <Grid>{children}</Grid>
  )
}

