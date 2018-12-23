import React from 'react'

const Text = ({ children, style = {} }) => (
  <span
    style={{
      fontSize: '14px',
      fontWeight: 'normal',
      margin: '0px',
      ...style
    }}
  >
    {children}
  </span>
)

export default Text
