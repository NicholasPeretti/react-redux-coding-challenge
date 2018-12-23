import React from 'react'

const style = {
  margin: '0px',
  fontSize: '18px',
  fontWeight: 'normal'
}

const SubTitle = ({ children }) => (
  <h3 style={style}>
    {children}
  </h3>
)

export default SubTitle
