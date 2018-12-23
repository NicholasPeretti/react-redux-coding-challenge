import React from 'react'

const SubTitle = ({ children, style = {} }) => (
  <h3
    style={{
      margin: '0px',
      fontSize: '18px',
      fontWeight: 'normal',
      ...style
    }}
  >
    {children}
  </h3>
)

export default SubTitle
