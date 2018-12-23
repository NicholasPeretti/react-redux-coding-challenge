import React from 'react'

const style = {
  margin: '0px',
  fontSize: '32px',
  fontWeight: 'bold'
}

const Title = ({ children }) => (
  <h1 style={style}>
    {children}
  </h1>
)

export default Title