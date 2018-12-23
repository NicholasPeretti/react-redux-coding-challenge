import React from 'react'

const Title = ({ children, style = {} }) => (
  <h1
    style={{
      margin: '0px',
      fontSize: '32px',
      fontWeight: 'bold',
      ...style
    }}
  >
    {children}
  </h1>
)

export default Title
